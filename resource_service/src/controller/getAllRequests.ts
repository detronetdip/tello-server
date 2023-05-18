import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { prisma } from "../prisma_connection/index";

export const getAllequests = async (req: Request, res: Response) => {
  try {
    const userId = req.params.uid;
    const friends = await prisma.friends.findMany({
      where: {
        AND: [
          {
            friendId: userId,
          },
          {
            isAccepted: false,
          },
        ],
      },
      include:{
        user:true
      }
    });

    return res.status(StatusCodes.Accepted).json({
      ResponseCode: StatusCodes.Success,
      message: ErrorMessages.Successfull,
      data: friends,
    });
  } catch (error) {
    return res.status(StatusCodes.ServerError).json({
      ResponseCode: StatusCodes.InternalServerError,
      message: ErrorMessages.ServerError,
      error,
    });
  }
};
