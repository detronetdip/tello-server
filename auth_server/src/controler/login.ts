/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { UserModel } from "../model/userModel";
import bcrypt from "bcryptjs";
import { StatusCodes } from "../error_codes";
import { signToken } from "../utils/token";

export function handelLogin(req: Request, res: Response) {
  const { email, username, password } = req.body;
  const findUser = async () => {
    const result = await UserModel.findOne({ email: email });
    return result;
  };
  try {
    findUser().then((_user) => {
      if (!_user)
        return res.status(StatusCodes.Success).json({
          msg: "Invalid Credentials",
        });

      const Db_password = _user.password;
      const checkPass = async () => {
        const match = await bcrypt.compare(password, Db_password);
        if (!match) {
          res.status(StatusCodes.Success).json({
            msg: "Invalid Credentials",
          });
        } else {
          const token = signToken(
            { uid: _user.id, name: _user.userName, email: _user.email },
            300
          );
          res.status(StatusCodes.Success).json({
            token,
          });
        }
      };
      checkPass();
    });
  } catch (error) {
    res.status(StatusCodes.BadRequest).json({
      msg: "Something went wrong",
    });
  }
}
