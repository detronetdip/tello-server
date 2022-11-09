/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import {
  verifyToken,
} from "../utils/token";
import { UserDataToSign } from "../types";

export function isLogedIn(req: Request, res: Response) {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return res.status(StatusCodes.Unauthorized).json({
      isLogin: false,
      code: StatusCodes.InvalidToken,
      msg: ErrorMessages.TokenExpired,
    });
  }
  const token: UserDataToSign | boolean = verifyToken(
    accessToken
  ) as UserDataToSign;
  if (token) {
    return res.status(StatusCodes.Success).json({
      isLogin: true,
      code: StatusCodes.Success,
      msg: ErrorMessages.Successfull,
    });
  } else {
    res.status(StatusCodes.Unauthorized).json({
      isLogin: false,
      code: StatusCodes.InvalidToken,
      msg: ErrorMessages.TokenExpired,
    });
  }
}
