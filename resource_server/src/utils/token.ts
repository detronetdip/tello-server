import { UserDataToSign } from "../types";
import jwt from "jsonwebtoken";
import { getPublicKey } from "./key";

export function verifyToken(token: string): boolean | UserDataToSign {
  if (token === null || token === undefined) return false;
  try {
    return jwt.verify(token, getPublicKey(), function (err, decoded) {
      return decoded === undefined ? false : decoded;
    });
  } catch (error) {
    return false;
  }
}
