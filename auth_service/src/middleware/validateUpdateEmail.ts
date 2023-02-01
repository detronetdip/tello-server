/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { validateEmail } from "../utils/validator";

export function validateUpdateEmail(req: Request, res: Response, next: Function) {
  const { email, userId } = req.body;
  if (userId === undefined || email === undefined) {
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
