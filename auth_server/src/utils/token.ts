import { UserDataToSign } from "../types";
import jwt from "jsonwebtoken";
import { getPrivateKey } from "./key";

function signToken(userDetails: UserDataToSign, age: number): string {
  const token = jwt.sign(userDetails, getPrivateKey(), {
    algorithm: "RS256",
    expiresIn: `${age}`,
  });
  return token; 
}
export { signToken };
