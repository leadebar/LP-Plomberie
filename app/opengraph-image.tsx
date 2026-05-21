import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — Plombier à Cagnes-sur-Mer & dans le 06`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a1038 0%, #16205a 60%, #060a26 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#aeb7d8",
          }}
        >
          Artisan plombier · Cagnes-sur-Mer & 06
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: 24,
            maxWidth: 920,
          }}
        >
          LP Plomberie — votre plombier de confiance dans le 06
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            marginTop: 44,
            fontSize: 34,
            color: "#d6dbec",
          }}
        >
          <span>Tel. {siteConfig.phone.display}</span>
          <span>•</span>
          <span>Devis gratuit</span>
          <span>•</span>
          <span>6j/7</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
