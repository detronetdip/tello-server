import {
  changePasswordNotification,
  loginTemplate,
  otpTemplate,
} from "./mail-templates/template";
import crypto from "crypto";
export function constructMail(
  category: "OTP" | "REGISTRATION" | "PASSWORDCHANGED",
  _aditional: { aditional?: object }
) {
  if (category === "OTP") {
    return otpTemplate(crypto.randomBytes(6).toString("hex"));
  } else if (category === "PASSWORDCHANGED") {
    return changePasswordNotification(crypto.randomBytes(6).toString("hex"));
  } else {
    return loginTemplate();
  }
}
