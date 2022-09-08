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
  const token: UserDataToSign | boolean = verifyToken(
    accessToken
  ) as UserDataToSign;

  if (!token) {
    return res.status(StatusCodes.Unauthorized).json({
      isLogin: false,
    });
  } else {
    res.status(StatusCodes.Success).json({
      isLogin: true,
    });
  }
}
