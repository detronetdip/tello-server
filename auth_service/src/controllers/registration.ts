/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import axios from "axios";
import { setData } from "../cache";
import { prisma } from "../prisma_connection";

async function sentOTP({
  email,
  OTP,
}: {
  email: string;
  OTP: string;
}): Promise<boolean> {
  return axios
    .post(process.env.NotificationServerURL + "/api/internal/sent-otp", {
      email: email,
      otp: OTP,
    })
    .then((r) => {
      return r.data;
    });
}

export async function handelRegistration(req: Request, res: Response) {
  const { email, username, password, firstName, lastName } = req.body;
  const salt = bcrypt.genSaltSync(10);
  console.log('reach')
  try {
    const userId = uuidv4();
    const OTP = `${Math.round(Math.random() * 1000000)}`;
     sentOTP({
      email,
      OTP,
    });
    await setData(userId + "-OTP", OTP);
    const data = await prisma.user.create({
      data: {
        id: userId,
        email: email,
        password: bcrypt.hashSync(password, salt),
        username: username,
        firstname: firstName,
        lastname: lastName,
      },
    });
    console.log(data);
    res.status(StatusCodes.Success).json({
      code: StatusCodes.Success,
      msg: ErrorMessages.Successfull,
      data: {
        userId: userId,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.ServerError).json({
      msg: ErrorMessages.ServerError,
      code: StatusCodes.InternalServerError,
    });
  }
}
