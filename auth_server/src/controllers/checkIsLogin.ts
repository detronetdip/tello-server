/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { UserModel } from "../model/userModel";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} from "../utils/token";
import { UserDataToSign } from "../types";

export async function isLogedIn(req: Request, res: Response) {
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
