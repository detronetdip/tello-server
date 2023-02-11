import { readFileSync } from "fs";
import path from "path";
export function getPrivateKey(): string {
  const Path = path.resolve(__dirname, "key");
  return readFileSync(Path+"private.pem", "utf8");
}
export function getPublicKey(): string {
  const Path = path.resolve(__dirname, "key");
  return readFileSync(Path + "public.pem", "utf8");
}
