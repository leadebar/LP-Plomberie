import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";
import { projets, type Projet } from "@/lib/projets";

/** Projets dont la photo existe réellement dans /public (évite les images cassées). */
export function getAvailableProjets(): Projet[] {
  return projets.filter((p) =>
    existsSync(path.join(process.cwd(), "public", p.image))
  );
}
