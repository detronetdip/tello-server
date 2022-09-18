import { readFileSync } from "fs";
export function getPrivateKey(): string {
  return readFileSync("./key/private.pem", "utf8");
}
export function getPublicKey(): string {
  return readFileSync("./key/public.pem", "utf8");
}
