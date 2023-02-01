import { Request, Response } from "express";
import { sentMail } from "../utils/mail/Mail";
import { constructMail } from "../utils/mail/MailConstruct";

export async function passwordChangeNotification(req: Request, res: Response) {
  const template = constructMail("PASSWORDCHANGED", {
    USERID: req.body.userId,
    USERNAME: req.body.username,
  });
  sentMail(template, "change password", "ayondip2001@gmail.com");
  console.log("rt");
  
  return res.status(200).json({u:9});
}
