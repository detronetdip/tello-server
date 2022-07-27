import { UserDataToSign } from "../types";
import jwt from "jsonwebtoken";
import { getPrivateKey, getPublicKey } from "./key";

function signToken(userDetails: UserDataToSign, age: number): string {
  const token = jwt.sign(userDetails, getPrivateKey(), {
    algorithm: "RS256",
    expiresIn: age,
  });
  return token;
}
export function verifyToken(token: string): string | boolean | object {
  try {
    jwt.verify(token, getPublicKey(), function (err, decoded) {
      return decoded === undefined ? false : decoded;
    });
  } catch (error) {
    return false;
  }
}
export function generateAccessToken(userDetails: UserDataToSign): string {
  return signToken(userDetails, 600);
}
export function generateRefreshToken(userDetails: UserDataToSign): string {
  return signToken(userDetails, 604800);
}
