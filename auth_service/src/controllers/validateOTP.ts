import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { UserModel } from "../model/userModel";
import { getData, delData } from "./../cache";

export async function validateOtp(req: Request, res: Response) {
  const { userId, otp } = req.body;
  try {
    const OTP = await getData(userId + "-OTP");
    const user = await UserModel.findOne({ uid: userId });
    if (!user) {
      return res.status(StatusCodes.BadRequest).json({
        ResponseCode: StatusCodes.InvalidCredential,
        message: ErrorMessages.InvalidCredentials,
      });
    }


    if (OTP != otp) {
      return res.status(StatusCodes.Success).json({
        code: StatusCodes.InvalidCredential,
        msg: ErrorMessages.InvalidCredentials,
      });
    }
    await UserModel.findOneAndUpdate(
      {
        uid: userId,
      },
      {
        $set: {
          isComplete: true,
        },
      }
    );
    delData(user.uid + "-OTP");
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
