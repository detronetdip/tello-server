import { loginTemplate } from "./mail-templates/template";
export function constructMail(
  to: string,
  subject: string,
  category: "OTP" | "REGISTRATION"
) {
  if (category === "OTP") {
    return loginTemplate();
  } else {
    return loginTemplate();
  }
}
