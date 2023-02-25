/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { prisma } from "../prisma_connection";

export async function updateEmail(req: Request, res: Response) {
  const { email, userId } = req.body;
  try {
    const _user = await prisma.user.findFirst({ where: { id: userId } });
    if (!_user) {
      return res.status(StatusCodes.Success).json({
        code: StatusCodes.InvalidCredential,
        msg: ErrorMessages.InvalidCredentials,
      });
    }
    const result = await prisma.user.findFirst({where:{email:email}});
    if (result && email !== _user.email) {
      return res.status(StatusCodes.Conflict).json({
        code: StatusCodes.AlredyInUse,
        msg: ErrorMessages.AllRedyPresent,
      });
    }
    const updatedData = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        email: email,
      },
    });
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
