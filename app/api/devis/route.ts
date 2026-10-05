import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  website?: string;
  page?: string;
};

const clean = (v: unknown, max: number) =>
  String(v ?? "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .trim()
    .slice(0, max);

const escapeHtml = (v: string) =>
  v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/**
 * Reçoit la demande de devis et l'envoie par email via Resend.
 * Variables d'environnement (Vercel) :
 *   RESEND_API_KEY      clé API Resend (sans elle, la route répond 503 et le formulaire
 *                       retombe sur l'email pré-rempli)
 *   DEVIS_TO_EMAIL      destinataire (défaut : l'email du site)
 *   DEVIS_FROM_EMAIL    expéditeur vérifié sur Resend (défaut : onboarding@resend.dev)
 */
export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Anti-spam : le champ piège est rempli => on répond OK sans rien envoyer.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const service = clean(body.service, 120);
  const message = clean(body.message, 3000);
  const page = clean(body.page, 200);

  if (!name || phone.replace(/\D/g, "").length < 8) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const to = process.env.DEVIS_TO_EMAIL || siteConfig.email;
  const from =
    process.env.DEVIS_FROM_EMAIL || `${siteConfig.name} <onboarding@resend.dev>`;
  const replyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : undefined;

  const rows: [string, string][] = [
    ["Nom", name],
    ["Téléphone", phone],
    ["Email", email || "non renseigné"],
    ["Service", service || "non précisé"],
    ["Page", page || "inconnue"],
  ];

  const html = `
    <h2>Nouvelle demande de devis</h2>
    <table cellpadding="6">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`
        )
        .join("")}
    </table>
    <p><strong>Message</strong></p>
    <p>${escapeHtml(message || "(vide)").replace(/\n/g, "<br />")}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: replyTo,
      subject: `Demande de devis : ${service || "Plomberie"} (${name})`,
      html,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
