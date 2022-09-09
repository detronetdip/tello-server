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
  const token: UserDataToSign | boolean =  verifyToken(
    accessToken
  ) as UserDataToSign;
  const rToken: UserDataToSign | boolean =  verifyToken(
    refreshToken
  ) as UserDataToSign;
  console.log(refreshToken,rToken);

  if (token && rToken) {
    return res.status(StatusCodes.Success).json({
      isLogin: true,
    });
  } else if (!token && rToken) {
    res.status(StatusCodes.Unauthorized).json({
      isLogin: false,
      msg: "token expired",
    });
  } else if (!token && !rToken) {
    res.status(StatusCodes.Unauthorized).json({
      isLogin: false,
      msg: "both token not found",
    });
  }
}
