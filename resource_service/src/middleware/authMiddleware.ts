import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { verifyToken } from "../utils/token";
import { UserDataToSign } from "../types/index";

export function Auth(req: Request, res: Response, next: NextFunction) {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return res.status(StatusCodes.Unauthorized).json({
      code: StatusCodes.InvalidToken,
      msg: ErrorMessages.TokenExpired,
    });
  } else {
    const user = verifyToken(accessToken);
    if (!user) {
      return res.status(StatusCodes.Unauthorized).json({
        code: StatusCodes.InvalidToken,
        msg: ErrorMessages.TokenExpired,
      });
    } else {
      req.body.userId = (user as UserDataToSign)?.uid;
      next();
    }
  }
}
