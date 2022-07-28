import { readFileSync } from "fs";
export function getPrivateKey(): string {
  return readFileSync("./src/key/private.pem", "utf8");
}
export function getPublicKey(): string {
    return readFileSync("./src/key/public.pem", "utf8");
  }
