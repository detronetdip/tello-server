/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { StatusCodes } from "../error_codes";
import { generateAccessToken, generateRefreshToken } from "../utils/token";
import { ErrorMessages } from "../error_messages";
import cookieOption from "../config/Cookie";
import tokenConfig from "../config/token";
import { setData } from "../cache";
import { prisma } from "../prisma_connection";

export async function handelLogin(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const _user = await prisma.user.findFirst({ where: { email: email } });
    if (!_user)
      return res.status(StatusCodes.Success).json({
        code: StatusCodes.InvalidCredential,
        msg: ErrorMessages.InvalidCredentials,
      });
    const Db_password = _user.password;
    const match = await bcrypt.compare(password, Db_password);
    if (!match) {
      return res.status(StatusCodes.Success).json({
        code: StatusCodes.InvalidCredential,
        msg: ErrorMessages.InvalidCredentials,
      });
    } else if (!_user.isComplete) {
      return res.status(StatusCodes.Success).json({
        code: StatusCodes.AccountVerificationPending,
        msg: ErrorMessages.AccountVerificationending,
      });
    } else {
      const accessToken = await generateAccessToken({
        uid: _user.id,
        email: _user.email,
      });
      const refreshToken = await generateRefreshToken({
        uid: _user.id,
        email: _user.email,
        version: _user.tokenversion == 0 ? 0 : _user.tokenversion,
      });
      res.cookie("accessToken", accessToken, {
        ...cookieOption,
        maxAge: tokenConfig.accessTokenExpiryTime * 1000,
      });
      res.cookie("refreshToken", refreshToken, {
        ...cookieOption,
        maxAge: tokenConfig.refreshTokenExpiryTime * 1000,
      });
      await setData(_user.id, accessToken, tokenConfig.accessTokenExpiryTime);
      res.status(StatusCodes.Success).json({
        code: StatusCodes.Success,
        msg: ErrorMessages.Successfull,
        info: {
          id: _user.id,
          username: _user.username,
          email: _user.email,
          firstname: _user.firstname,
          lastname: _user.lastname,
        },
      });
    }
  } catch (error) {
    // console.log(error);
    res.status(StatusCodes.BadRequest).json({
      code: StatusCodes.BadRequest,
      msg: ErrorMessages.SomethingWentWrong,
    });
  }
}
