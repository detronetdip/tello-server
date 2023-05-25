import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { prisma } from "../prisma_connection/index";
// import axios from "axios";
export const likePost = async (req: Request, res: Response) => {
  try {
    const { userId, postId } = req.body;
    await prisma.like.create({
      data: {
        userId: userId,
        postId: postId,
      },
    });
    // await axios.post(
    //   `${process.env.NOTIFICATION_SERVER_URL}/internal/notification`,
    //   {
    //     userId: id1.userId,
    //     notification: {
    //       content: "Your request is accepted",
    //       type: NOTIFICATION_TYPES.REQUEST_ACCEPTED,
    //       redirect: "",
    //     },
    //   }
    // );
    return res.status(StatusCodes.Success).json({
      ResponseCode: StatusCodes.RegistrationSuccessful,
      message: ErrorMessages.Successfull,
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.ServerError).json({
      ResponseCode: StatusCodes.InternalServerError,
      message: ErrorMessages.ServerError,
      error,
    });
  }
};
