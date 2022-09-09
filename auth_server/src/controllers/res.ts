/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { UserModel } from "../model/userModel";
import bcrypt from "bcryptjs";
import { StatusCodes } from "../error_codes";
import { generateAccessToken, generateRefreshToken } from "../utils/token";
import { ErrorMessages } from "../error_messages";
import cookieOption from "../config/Cookie";
import tokenConfig from "../config/token";
import { setData } from "../cache";

export async function sendRes(req: Request, res: Response) {
    const d=new Date();
  res.json({
    data: `generated at ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
  });
}
