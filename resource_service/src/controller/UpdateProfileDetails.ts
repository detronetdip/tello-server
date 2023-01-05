import axios from "axios";
import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { prisma } from "../prisma_connection";

export const updateProfileDetails = async (req: Request, res: Response) => {
  const { userId, email, username, bio } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    const user2 = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });
    if (!user) {
      return res.status(StatusCodes.BadRequest).json({
        ResponseCode: StatusCodes.InvalidCredential,
        message: ErrorMessages.InvalidCredentials,
      });
    }
    if (user2) {
      return res.status(StatusCodes.Conflict).json({
        code: StatusCodes.AlredyInUse,
        msg: ErrorMessages.AllRedyPresent,
      });
    }
    const response = await axios.put(
      process.env.AUTH_SERVER_URL + "/api/internal/updatePassword",
      {
        email,
        userId,
      }
    );
    const data = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        username,
        bio,
      },
    });

    return res.status(StatusCodes.Success).json({
      ResponseCode: StatusCodes.Accepted,
      message: ErrorMessages.Successfull,
      info: {
        email: response.data.data.email,
        data,
      },
    });
  } catch (error) {
    if (error.response.status === StatusCodes.Conflict) {
      return res.status(StatusCodes.Conflict).json({
        code: StatusCodes.AlredyInUse,
        msg: ErrorMessages.AllRedyPresent,
      });
    }

    return res.status(StatusCodes.ServerError).json({
      ResponseCode: StatusCodes.InternalServerError,
      message: ErrorMessages.ServerError,
      error,
    });
  }
};
