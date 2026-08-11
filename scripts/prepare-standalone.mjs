import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const standalone = join(root, ".next", "standalone");
const staticDir = join(root, ".next", "static");
const publicDir = join(root, "public");

if (!existsSync(standalone)) {
  throw new Error("Pasta .next/standalone não encontrada. Rode o next build primeiro.");
}

mkdirSync(join(standalone, ".next"), { recursive: true });
cpSync(staticDir, join(standalone, ".next", "static"), { recursive: true });
cpSync(publicDir, join(standalone, "public"), { recursive: true });

console.log("Standalone preparado com public/ e .next/static.");
