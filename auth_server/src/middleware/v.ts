/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";

export function validV(req: Request, res: Response, next: Function) {
    const { accessToken } = req.cookies;
  if ( !accessToken ) {
    return res.status(StatusCodes.UnprocessableEntity).json({
      code: StatusCodes.InsufficientArguments,
      msg: ErrorMessages.InsufficientData,
    });
  } else {
    next();
  }
}
