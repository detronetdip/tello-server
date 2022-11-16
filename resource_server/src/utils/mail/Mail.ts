import { constructMail } from "./MailConstruct"
import { sendMailHelper } from "./Sentmail";

export function sentMail(){
    const template= constructMail("OTP");
    sendMailHelper("ayondip2001@gmail.com","OTP",template);
}