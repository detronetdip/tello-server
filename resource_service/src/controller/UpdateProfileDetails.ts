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
    if (!user) {
      return res.status(StatusCodes.BadRequest).json({
        ResponseCode: StatusCodes.InvalidCredential,
        message: ErrorMessages.InvalidCredentials,
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
    return res.status(StatusCodes.ServerError).json({
      ResponseCode: StatusCodes.InternalServerError,
      message: ErrorMessages.ServerError,
    });
  }
};
