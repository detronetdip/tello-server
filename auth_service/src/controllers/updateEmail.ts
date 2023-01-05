/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { UserModel } from "../model/userModel";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";

export async function updateEmail(req: Request, res: Response) {
  const { email, userId } = req.body;
  try {
    const _user = await UserModel.findOne({ uid: userId });
    if (!_user)
      return res.status(StatusCodes.Success).json({
        code: StatusCodes.InvalidCredential,
        msg: ErrorMessages.InvalidCredentials,
      });
    const updatedData = await UserModel.findOneAndUpdate(
      {
        uid: userId,
      },
      {
        $set: {
          email: email,
        },
      },
      { returnDocument: "after" }
    );
    return res.status(StatusCodes.Success).json({
      code: StatusCodes.Accepted,
      msg: ErrorMessages.Successfull,
      data: updatedData,
    });
  } catch (error) {
    // console.log(error);
    return res.status(StatusCodes.BadRequest).json({
      code: StatusCodes.BadRequest,
      msg: ErrorMessages.SomethingWentWrong,
    });
  }
}
