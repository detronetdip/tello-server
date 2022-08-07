/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { validateEmail, validateUserName } from "../utils/validator";
import { UserModel } from "../model/userModel";
import { ErrorMessages } from "../error_messages";

export function validateRegistration(
  req: Request,
  res: Response,
  next: Function
) {
  const { email, username, password } = req.body;
  if (email === undefined || username === undefined || password === undefined) {
    return res.status(StatusCodes.BadRequest).json({
      code: StatusCodes.InsufficientArguments,
      msg: ErrorMessages.InsufficientData,
    });
  } else if (!validateEmail(email) || !validateUserName(username)) {
    return res.status(StatusCodes.BadRequest).json({
      code: StatusCodes.InvalidFormat,
      msg: ErrorMessages.MalformedData,
    });
  } else {
    try {
      const checkUser = async () => {
        const result = await UserModel.find({
          $or: [{ email: email }, { userName: username }],
        });
        return result;
      };
      (async function () {
        await checkUser().then((e) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          if (e.lenth > 0) {
            return res.status(StatusCodes.Conflict).json({
              code: StatusCodes.AlredyInUse,
              msg: ErrorMessages.AllRedyPresent,
            });
          } else {
            next();
          }
        });
      })();
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.ServerError).json({
        code: StatusCodes.InternalServerError,
        msg: ErrorMessages.ServerError,
      });
    }
  }
}
