import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { prisma } from "../prisma_connection/index";
export const myDetails = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findFirst({
      where: {
        id: id,

      },
      include: {
        _count: {
          select: {
            followers: true,
            following: true,
          },
        },
      },

    });
    delete user['password'];
    delete user['id'];
    delete user['updatedAt'];
    delete user['createdAt'];
    delete user['tokenversion'];
    delete user['isComplete'];
    if (!user) {
      return res.status(StatusCodes.BadRequest).json({
        ResponseCode: StatusCodes.InvalidCredential,
        message: ErrorMessages.InvalidCredentials,
      });
    }

    return res.status(StatusCodes.Success).json({
      ResponseCode: StatusCodes.Accepted,
      message: ErrorMessages.Successfull,
      info: user,
    });
  } catch (error) {
    return res.status(StatusCodes.ServerError).json({
      ResponseCode: StatusCodes.InternalServerError,
      message: ErrorMessages.ServerError,
      error,
    });
  }
};
