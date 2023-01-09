import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";

export function validateUpdatePassword(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userId, old, pass, cnf } = req.body;
  if (
    userId === undefined ||
    old === undefined ||
    pass === undefined ||
    cnf === undefined
  ) {
    return res.status(StatusCodes.Success).json({
      code: StatusCodes.InsufficientArguments,
      msg: ErrorMessages.InsufficientData,
    });
  } else {
    next();
  }
}
