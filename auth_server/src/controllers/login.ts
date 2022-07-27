/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { UserModel } from "../model/userModel";
import bcrypt from "bcryptjs";
import { StatusCodes } from "../error_codes";
import { generateAccessToken, generateRefreshToken } from "../utils/token";

export async function handelLogin(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const _user = await UserModel.findOne({ email: email });
    if (!_user)
      return res.status(StatusCodes.Success).json({
        msg: "Invalid Credentials",
      });
    const Db_password = _user.password;
    const match = await bcrypt.compare(password, Db_password);
    if (!match) {
      res.status(StatusCodes.Success).json({
        msg: "Invalid Credentials",
      });
    } else {
      const accessToken = generateAccessToken({
        uid: _user.id,
        name: _user.userName,
        email: _user.email,
      });
      const refreshToken = generateRefreshToken({
        uid: _user.id,
        name: _user.userName,
        email: _user.email,
        version: _user.tokenVersion == 0 ? 1 : _user.tokenVersion,
      });
      res.status(StatusCodes.Success).json({
        accessToken,
        refreshToken,
      });
    }
  } catch (error) {
    res.status(StatusCodes.BadRequest).json({
      msg: "Something went wrong",
    });
  }
}
