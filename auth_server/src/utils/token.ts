import { UserDataToSign } from "../types";
import jwt from "jsonwebtoken";
import { getPrivateKey, getPublicKey } from "./key";

async function signToken(
  userDetails: UserDataToSign,
  age: number
): Promise<string> {
  const token = await jwt.sign(userDetails, getPrivateKey(), {
    algorithm: "RS256",
    expiresIn: age,
  });
  return token;
}
export function verifyToken(token: string): string | boolean | object {
  if (token == null || token == undefined) return false;
  try {
    jwt.verify(token, getPublicKey(), function (err, decoded) {
      return decoded === undefined ? false : decoded;
    });
  } catch (error) {
    return false;
  }
}
export function generateAccessToken(
  userDetails: UserDataToSign
): Promise<string> {
  return signToken(userDetails, 600);
}
export async function generateRefreshToken(
  userDetails: UserDataToSign
): Promise<string> {
  return signToken(userDetails, 604800);
}
