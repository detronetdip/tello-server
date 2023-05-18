import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { prisma } from "../prisma_connection/index";
import axios from "axios";
import { NOTIFICATION_TYPES } from "../utils/utils";
export const accept = async (req: Request, res: Response) => {
  try {
    const { reqId } = req.body;
    const id1 = await prisma.friends.findFirst({
      where: {
        id: reqId,
      },
    });
    if (!id1) {
      return res.status(StatusCodes.BadRequest).json({
        ResponseCode: StatusCodes.InvalidCredential,
        message: ErrorMessages.InvalidCredentials,
      });
    }
    if (id1.isAccepted) {
      return res.status(StatusCodes.BadRequest).json({
        ResponseCode: StatusCodes.AlredyInUse,
        message: ErrorMessages.AllRedyPresent,
      });
    }
    await prisma.friends.update({
      where: { id: id1.id },
      data: { isAccepted: true },
    });
    await axios.post(
      `${process.env.NOTIFICATION_SERVER_URL}/internal/notification`,
      {
        userId: id1.userId,
        notification: {
          content: "Your request is accepted",
          type: NOTIFICATION_TYPES.REQUEST_ACCEPTED,
          redirect: "",
        },
      }
    );
    return res.status(StatusCodes.Success).json({
      ResponseCode: StatusCodes.RegistrationSuccessful,
      message: ErrorMessages.Successfull,
    });
  } catch (error) {
    return res.status(StatusCodes.ServerError).json({
      ResponseCode: StatusCodes.InternalServerError,
      message: ErrorMessages.ServerError,
      error,
    });
  }
};
