/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { UserModel } from "../model/userModel";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";

export async function handelRegistration(req: Request, res: Response) {
  const { email, username, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  try {
    const USER = new UserModel({
      userName: username,
      email: email,
      password: bcrypt.hashSync(password, salt),
      uid: uuidv4(),
    });
    await USER.save()
      .then((_e: object) => {
        res.status(StatusCodes.Success).json({
          msg: "Registration successfull",
        });
      })
      .catch((e) => {
        res.status(StatusCodes.BadRequest).json({
          msg: "Duplicate Entry detected",
          e,
        });
      });
  } catch (error) {
    res.status(StatusCodes.ServerError).json({
      msg: ErrorMessages.ServerError,
      code: StatusCodes.InternalServerError,
    });
  }
}
