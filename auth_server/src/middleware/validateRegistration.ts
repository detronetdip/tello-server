/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { validateEmail, validateUserName } from "../utils/validator";
import { UserModel } from "../model/userModel";

export function validateRegistration(
  req: Request,
  res: Response,
  next: Function
) {
  const { email, username, password } = req.body;
  if (email === undefined || username === undefined || password === undefined) {
    return res
      .status(StatusCodes.BadRequest)
      .json({ msg: "Insufficient Data" });
  } else if (!validateEmail(email) || !validateUserName(username)) {
    return res.status(StatusCodes.BadRequest).json({ msg: "Invalid Data" });
  } else {
    const checkUser = async () => {
      const result = await UserModel.find({
        $or: [{ email: email }, { userName: username }],
      });
      return result;
    };
    checkUser().then((e) => {
      if (e.length > 0) {
        return res
          .status(StatusCodes.Conflict)
          .json({ msg: "Credentials are already in use." });
      } else {
        next();
      }
    });
  }
}
