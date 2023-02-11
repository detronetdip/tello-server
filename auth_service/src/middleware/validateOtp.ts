/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";

export function validateRegenerateRequest(
  req: Request,
  res: Response,
  next: Function
): void | Response {
  const { userId,otp } = req.body;
  if (!userId || !otp) {
    return res.status(StatusCodes.Success).json({
      code: StatusCodes.InsufficientArguments,
      msg: ErrorMessages.InsufficientData,
    });
  }else {
    next();
  }
}
