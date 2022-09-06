/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { UserModel } from "../model/userModel";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { generateAccessToken, verifyToken } from "../utils/token";

export async function handelRegistration(req: Request, res: Response) {
  const { refreshToken } = req.cookies;
  const token = verifyToken(refreshToken);

  if (!token) {
    res.status(StatusCodes.Unauthorized).json({
      msg: "No access granted",
    });
  } else {
    const findUser = async () => {
      const result = await UserModel.findOne({ email: token.email });
      return result;
    };
    findUser().then((_user) => {
      const userId = _user.id;
      const UserName = _user.firstName + " " + _user.lastName;
      const userLID = _user.lid;
      const email = _user.email;
      const v = _user.tokenVersion;
      
      if (v !== token.v) {
        res.status(StatusCodes.Success).json({
          msg: "Hacker detected",
          code: 457,
        });
      } else {
        const accessToken = generateAccessToken({
          userId,
          userLID,
          UserName,
          email,
        });
        const incrementVersion = async () => {
          return await UserModel.findOneAndUpdate(
            //@ts-ignore
            { email: token?.email },
            { $inc: { tokenVersion: 1 } },
            { returnOriginal: false }
          );
        };
        incrementVersion().then((e) => {
          console.log(e);
          const refreshToken = generateRefreshToken({
            userId,
            userLID,
            UserName,
            email,
            v: e.tokenVersion,
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
