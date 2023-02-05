/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { UserModel } from "../model/userModel";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import axios from "axios";

async function sentToResourceServer({
  userId,
  username,
  firstName,
  lastName,
}: {
  userId:string;
  username: string;
  firstName: string;
  lastName: string;
}): Promise<boolean> {
  console.log(username, firstName, lastName);

  return axios
    .post(process.env.ResourceServerURL + "/api/internal/createUser", {
      userId,
      username,
      firstName,
      lastName,
    })
    .then((r) => {
      return r.data;
    });
}

export async function handelRegistration(req: Request, res: Response) {
  const { email, username, password, firstName, lastName } = req.body;
  const salt = bcrypt.genSaltSync(10);
  try {
    const userId=uuidv4();
    const USER = new UserModel({
      email: email,
      password: bcrypt.hashSync(password, salt),
      uid: userId,
    });

    const response = await sentToResourceServer({
      userId,
      username,
      firstName,
      lastName,
    });

    await USER.save().then((_e: object) => {
      res.status(StatusCodes.Success).json({
        code: StatusCodes.Success,
        msg: ErrorMessages.Successfull,
      });
    });
  } catch (error) {

    res.status(StatusCodes.ServerError).json({
      msg: ErrorMessages.ServerError,
      code: StatusCodes.InternalServerError,
    });
  }
}
