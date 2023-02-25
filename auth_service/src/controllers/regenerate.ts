/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} from "../utils/token";
import { UserDataToSign } from "../types";
import cookieOption from "../config/Cookie";
import tokenConfig from "../config/token";
import { getData, setData } from "./../cache";
import { prisma } from "../prisma_connection";

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
    const _user = await prisma.user.findFirst({ where:{id: token.uid} });
    const uid: string = _user.id;
    const email = _user.email;
    const v = _user.tokenversion;
    const userAccessToken = await getData(uid);
    if (userAccessToken && verifyToken(userAccessToken)) {
      return res.status(StatusCodes.Success).json({
        msg: ErrorMessages.BadRequest,
        code: StatusCodes.ValidAccessTokenError,
      });
    }

    if (v !== token.version) {
      res.status(StatusCodes.Success).json({
        msg: ErrorMessages.TokenVersionError,
        code: StatusCodes.TokenVersionMissMatch,
      });
    } else {
      const accessToken = await generateAccessToken({
        uid,
        email,
      });
      const updatedUser = await prisma.user.update({
        where:{
          email:token.email
        },
        data:{
          tokenversion:{increment:1}
        }
      });
      const refreshToken = await generateRefreshToken({
        uid,
        email,
        version: updatedUser.tokenversion,
      });
      setData(uid, accessToken,tokenConfig.accessTokenExpiryTime);
      res.cookie("accessToken", accessToken, {
        ...cookieOption,
        maxAge: tokenConfig.accessTokenExpiryTime * 1000,
      });
      res.cookie("refreshToken", refreshToken, {
        ...cookieOption,
        maxAge: tokenConfig.refreshTokenExpiryTime * 1000,
      });
      res.status(StatusCodes.Success).json({
        msg: ErrorMessages.Successfull,
        code: StatusCodes.TokenGenerationSuccessfull,
      });
    }
  }
}
