import e from "cors";
import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { prisma } from "../prisma_connection/index";
export const block = async (req: Request, res: Response) => {
  try {
    const { userId, friendId, action } = req.body;

    const targetId = await prisma.friends.findFirst({
      where: {
        userId: userId,
        friendId: friendId,
      },
    });
    if (!targetId && action) {
      const user1 = await prisma.user.findFirst({
        where: {
          id: userId,
        },
      });
      const user2 = await prisma.user.findFirst({
        where: {
          id: friendId,
        },
      });
      if (!user1 || !user2) {
        return res.status(StatusCodes.BadRequest).json({
          ResponseCode: StatusCodes.InvalidCredential,
          message: ErrorMessages.InvalidCredentials,
        });
      }
      await prisma.friends.create({
        data: {
          userId: userId,
          friendId: friendId,
          block: true,
        },
      });
      return res.status(StatusCodes.Success).json({
        ResponseCode: StatusCodes.RegistrationSuccessful,
        message: ErrorMessages.Successfull,
      });
    } else if (targetId) {
      if (targetId.block === action) {
        return res.status(StatusCodes.BadRequest).json({
          ResponseCode: StatusCodes.AlredyInUse,
          message: ErrorMessages.AllRedyPresent,
        });
      }

      if (action) {
        await prisma.friends.update({
          where: { id: targetId.id },
          data: { block: true },
        });
        return res.status(StatusCodes.Success).json({
          ResponseCode: StatusCodes.RegistrationSuccessful,
          message: ErrorMessages.Successfull,
        });
      } else if (!action && !targetId.isAccepted) {
        await prisma.friends.delete({
          where: {
            id: targetId.id,
          },
        });
        return res.status(StatusCodes.Success).json({
          ResponseCode: StatusCodes.RegistrationSuccessful,
          message: ErrorMessages.Successfull,
        });
      }
      await prisma.friends.update({
        where: { id: targetId.id },
        data: { block: false },
      });
      return res.status(StatusCodes.Success).json({
        ResponseCode: StatusCodes.RegistrationSuccessful,
        message: ErrorMessages.Successfull,
      });
    } else {
      return res.status(StatusCodes.BadRequest).json({
        ResponseCode: StatusCodes.BadRequest,
        message: ErrorMessages.BadRequest,
      });
    }
  } catch (error) {
    return res.status(StatusCodes.ServerError).json({
      ResponseCode: StatusCodes.InternalServerError,
      message: ErrorMessages.ServerError,
    });
  }
};
