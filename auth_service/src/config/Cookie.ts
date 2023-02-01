import { CookieOptions } from "express";
const cookieOption: CookieOptions = {
  httpOnly: true,
  secure: true,
  path: "/",
  sameSite: "strict",
};
export default cookieOption;
