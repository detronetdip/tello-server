import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { UserModel } from "../model/userModel";
import bcrypt from "bcryptjs";
import { delData } from "../cache";
import cookieOption from "../config/Cookie";

export async function updatePassword(req: Request, res: Response) {
  const { userId, old, pass, cnf } = req.body;
  try {
    if (pass !== cnf) {
      return res.status(StatusCodes.UnprocessableEntity).json({
        ResponseCode: StatusCodes.MismatchData,
        message: ErrorMessages.PasswordNotMatched_PC,
      });
    }
    const user = await UserModel.findOne({ uid: userId });
    if (!user) {
      return res.status(StatusCodes.BadRequest).json({
        ResponseCode: StatusCodes.InvalidCredential,
        message: ErrorMessages.InvalidCredentials,
      });
    }
    const Db_password = user.password;

    const match = await bcrypt.compare(old, Db_password);

    if (!match) {
      return res.status(StatusCodes.Success).json({
        code: StatusCodes.InvalidCredential,
        msg: ErrorMessages.InvalidCredentials,
      });
    }
    const salt = bcrypt.genSaltSync(10);
    await UserModel.findOneAndUpdate(
      {
        uid: userId,
      },
      {
        $set: {
          password: bcrypt.hashSync(pass, salt),
        },
      }
    );
    delData(user.uid);
    res.cookie("accessToken", "accessToken", {
      ...cookieOption,
      maxAge: 0,
    });
    res.cookie("refreshToken", "refreshToken", {
      ...cookieOption,
      maxAge: 0,
    });
    return res.status(StatusCodes.Success).json({
      ResponseCode: StatusCodes.Accepted,
      message: ErrorMessages.Successfull,
    });
  } catch (error) {
    return res.status(StatusCodes.ServerError).json({
      ResponseCode: StatusCodes.InternalServerError,
      message: ErrorMessages.ServerError,
      error,
    });
  }
}
