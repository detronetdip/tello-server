import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { prisma } from "../prisma_connection/index";
import axios from "axios";
import { NOTIFICATION_TYPES } from "../utils/utils";
export const createComment = async (req: Request, res: Response) => {
  try {
    const { postId, user, comment, parrent } = req.body;
    console.log("received",{ postId, user, comment, parrent })
    const post = await prisma.post.findFirst({
      where: {
        id: postId,
        userId:user
      },
    });
    console.log({
      id: postId,
      user
    })
    if (!post) {
      return res.status(StatusCodes.BadRequest).json({
        ResponseCode: StatusCodes.NotFound,
        message: ErrorMessages.InvalidCredentials,
      });
    }
    await prisma.comment.create({
      data:{
        content: comment,
        userId:user,
        postId,
        parentCommentId:parrent
      }
    })
    await axios.post(
      `${process.env.NOTIFICATION_SERVER_URL}/internal/notification`,
      {
        userId: post.userId,
        notification: {
          content: "Your got a comment!",
          type: NOTIFICATION_TYPES.POST_COMMENT,
          redirect: "",
        },
      }
    );
    return res.status(StatusCodes.Success).json({
      ResponseCode: StatusCodes.Accepted,
      message: ErrorMessages.Successfull,
    });
  } catch (error) {
    console.log(error)
    return res.status(StatusCodes.ServerError).json({
      ResponseCode: StatusCodes.InternalServerError,
      message: ErrorMessages.ServerError,
      error,
    });
  }
};
