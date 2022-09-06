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
import cookieOption from "../config/Cookie";

export async function handelRegeneration(req: Request, res: Response) {
  const { refreshToken } = req.cookies;
  const token: UserDataToSign | boolean = verifyToken(
    refreshToken
  ) as UserDataToSign;

  if (!token) {
    return res.status(StatusCodes.Unauthorized).json({
      code: StatusCodes.InvalidToken,
      msg: ErrorMessages.TokenExpired,
    });
  } else {
    const _user = await UserModel.findOne({ email: token.email });
    const uid: string = _user.id;
    const UserName = _user.firstName + " " + _user.lastName;
    const email = _user.email;
    const v = _user.tokenVersion;

    if (v !== token.version) {
      res.status(StatusCodes.Success).json({
        msg: ErrorMessages.TokenVersionError,
        code: StatusCodes.TokenVersionMissMatch,
      });
    } else {
      const accessToken = await generateAccessToken({
        uid,
        UserName,
        email,
      });
      const updatedUser = await UserModel.findOneAndUpdate(
        { email: token?.email },
        { $inc: { tokenVersion: 1 } },
        { returnOriginal: false }
      );
      const refreshToken = await generateRefreshToken({
        uid,
        UserName,
        email,
        version: updatedUser.tokenVersion,
      });
      res.cookie("accessToken", accessToken, {
        ...cookieOption,
        maxAge: 600 * 1000,
      });
      res.cookie("refreshToken", refreshToken, {
        ...cookieOption,
        maxAge: 604800 * 1000,
      });
      res.status(StatusCodes.Success).json({
        msg: ErrorMessages.Successfull,
        code: StatusCodes.TokenGenerationSuccessfull,
      });
    }
  }
}