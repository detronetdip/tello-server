import {
  changePasswordNotification,
  loginTemplate,
  otpTemplate,
} from "./mail-templates/template";
export function constructMail(
  category: "OTP" | "REGISTRATION" | "PASSWORDCHANGED",
  _aditional: {
    USERID?: string;
    USERNAME?: string;
    otp?: string;
  }
) {
  if (category === "OTP") {
    return otpTemplate(_aditional.otp);
  } else if (category === "PASSWORDCHANGED") {
    return changePasswordNotification(
      _aditional.USERNAME,
      `http://localhost:3000/svt?un=${_aditional.USERNAME}`
    );
  } else {
    return loginTemplate();
  }
}
