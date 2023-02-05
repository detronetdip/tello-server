import { Request, Response } from "express";
import { sentMail } from "../utils/mail/Mail";
import { constructMail } from "../utils/mail/MailConstruct";

export async function sentOTP(req: Request, res: Response) {
  const { OTP, email } = req.body;
  const template = constructMail("OTP", {
    otp: OTP,
  });
  sentMail(template, "OTP for Regestration", email);
  return res.status(200).json({ done: true });
}
