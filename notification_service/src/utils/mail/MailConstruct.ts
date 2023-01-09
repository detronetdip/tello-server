import {
  changePasswordNotification,
  loginTemplate,
  otpTemplate,
} from "./mail-templates/template";
import crypto from "crypto";
export function constructMail(
  category: "OTP" | "REGISTRATION" | "PASSWORDCHANGED",
  _aditional: {
    USERID?: string;
    USERNAME?: string;
  }
) {
  if (category === "OTP") {
    return otpTemplate(crypto.randomBytes(6).toString("hex"));
  } else if (category === "PASSWORDCHANGED") {
    return changePasswordNotification(
      _aditional.USERNAME,
      `http://localhost:3000/svt?un=${_aditional.USERNAME}`
    );
  } else {
    return loginTemplate();
  }
}
