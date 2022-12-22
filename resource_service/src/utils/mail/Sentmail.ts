import nodeMailer from "nodemailer";

export async function sendMailHelper(to: string, subject: string, template: string) {
  return new Promise((resolve, reject) => {
    const mailTransporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: "tello.noreply@gmail.com",
        pass: "dkczlqgxcstxbciz",
      },
    });

    const details = {
      from: "tello.noreply@gmail.com",
      to: to,
      subject: subject,
      html: template,
    };

    mailTransporter.sendMail(details, (err) => {
      if (err) {
        console.log("Error 404", err);
        reject();
      } else {
        console.log("Email Sent sucessfully");
        resolve(true);
      }
    });
  });
}
