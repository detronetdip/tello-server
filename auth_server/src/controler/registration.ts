/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { UserModel } from "../model/userModel";
import bcrypt from "bcryptjs";
import { StatusCodes } from "../error_codes";

export function handelRegistration(req: Request, res: Response) {
  const { email, username, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const addUser = async () => {
    const USER = new UserModel({
      userName: username,
      email: email,
      password: bcrypt.hashSync(password, salt),
    });
    await USER.save().then((_e: object) => {
      res.status(StatusCodes.Success).json({
        msg: "Registration successfull",
      });
    });
  };
  try {
    addUser();
  } catch (error) {
    res.status(StatusCodes.BadRequest).json({
      msg: "Duplicate Entry detected",
    });
  }
}
