import { sendMailHelper } from "./Sentmail";

export function sentMail(template: string, sub: string, email: string) {
  sendMailHelper(email, sub, template);
}
