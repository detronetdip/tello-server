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
  const { accessToken, refreshToken } = req.cookies;
  const token: UserDataToSign | boolean = verifyToken(
    accessToken
  ) as UserDataToSign;
  const rToken: UserDataToSign | boolean = verifyToken(
    refreshToken
  ) as UserDataToSign;
  if (token && rToken) {
    return res.status(StatusCodes.Success).json({
      isLogin: true,
      code: StatusCodes.Success,
      msg: ErrorMessages.Successfull,
    });
  } else if ((!token && rToken) || (!token && !rToken)) {
    res.status(StatusCodes.Unauthorized).json({
      isLogin: false,
      code: StatusCodes.InvalidToken,
      msg: ErrorMessages.TokenExpired,
    });
  }
}
