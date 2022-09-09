import { UserDataToSign } from "../types";
import jwt from "jsonwebtoken";
import { getPrivateKey, getPublicKey } from "./key";
import tokenConfig from "../config/token";

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
export function verifyToken(
  token: string
): boolean | UserDataToSign {
  if (token == null || token == undefined) return false;
  try {
    return jwt.verify(token, getPublicKey(), function (err, decoded) {
      return decoded === undefined ? false : decoded;
    });
  } catch (error) {
    return false;
  }
}
export function generateAccessToken(
  userDetails: UserDataToSign
): Promise<string> {
  return signToken(userDetails, tokenConfig.accessTokenExpiryTime);
}
export async function generateRefreshToken(
  userDetails: UserDataToSign
): Promise<string> {
  return signToken(userDetails, tokenConfig.refreshTokenExpiryTime);
}
