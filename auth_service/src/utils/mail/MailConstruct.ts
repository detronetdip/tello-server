import { loginTemplate, otpTemplate } from "./mail-templates/template";
import crypto from "crypto";
export function constructMail(
  category: "OTP" | "REGISTRATION"
) {
  if (category === "OTP") {
    return otpTemplate(crypto.randomBytes(6).toString("hex"));
  } else {
    return loginTemplate();
  }
}
