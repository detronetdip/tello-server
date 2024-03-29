/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { verifyToken } from "../utils/token";

export function validateRegenerateRequest(
  req: Request,
  res: Response,
  next: Function
): void | Response {
  const { accessToken, refreshToken } = req.cookies;
  if (accessToken) {
    return res.status(StatusCodes.Success).json({
      code: StatusCodes.ValidAccessTokenError,
      msg: ErrorMessages.BadRequest,
    });
  }
  if (!refreshToken) {
    return res.status(StatusCodes.Unauthorized).json({
      code: StatusCodes.RefreshTokenNotFound,
      msg: ErrorMessages.NotAuthenticate,
    });
  } else if (!verifyToken(refreshToken)) {
    return res.status(StatusCodes.Unauthorized).json({
      code: StatusCodes.InvalidToken,
      msg: ErrorMessages.TokenExpired,
    });
  } else {
    next();
  }
}
