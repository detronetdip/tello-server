/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { validateEmail } from "../utils/validator";

export function validateLogin(req: Request, res: Response, next: Function) {
  const { email, password } = req.body;
  if (email === undefined || password === undefined) {
    return res.status(StatusCodes.UnprocessableEntity).json({
      code: StatusCodes.InsufficientArguments,
      msg: ErrorMessages.InsufficientData,
    });
  } else if (!validateEmail(email)) {
    return res.status(StatusCodes.UnprocessableEntity).json({
      code: StatusCodes.InvalidFormat,
      msg: ErrorMessages.MalformedData,
    });
  } else {
    next();
  }
}
