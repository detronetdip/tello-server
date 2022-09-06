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
    res.status(StatusCodes.Unauthorized).json({
      msg: "No access granted",
    });
  } else {
    const findUser = async () => {
      const result = await UserModel.findOne({ email: token.email });
      return result;
    };
    await findUser().then((_user) => {
      const uid: string = _user.id;
      const UserName = _user.firstName + " " + _user.lastName;
      const email = _user.email;
      const v = _user.tokenVersion;

      if (v !== token.version) {
        res.status(StatusCodes.Success).json({
          msg: "Hacker detected",
          code: 457,
        });
      } else {
        const accessToken = generateAccessToken({
          uid,
          UserName,
          email,
        });
        const incrementVersion = async () => {
          return await UserModel.findOneAndUpdate(
            { email: token?.email },
            { $inc: { tokenVersion: 1 } },
            { returnOriginal: false }
          );
        };
        incrementVersion().then((e) => {
          console.log(e);
          const refreshToken = generateRefreshToken({
            uid,
            UserName,
            email,
            version: e.tokenVersion,
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
            msg: "token regenerated successfully",
            code: 456,
          });
        });
      }
    });
  }
}
