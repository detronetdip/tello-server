import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { prisma } from "../prisma_connection/index";
import { google } from "googleapis";
export const deletePost = async (req: Request, res: Response) => {
  try {
    const { postId, userId } = req.body;
    const post = await prisma.post.findFirst({
      where: {
        AND: {
          userId,
          id: postId,
        },
      },
    });
    if (!post) throw { message: "Post not found" };
    await prisma.post.delete({ where: { id: postId } });
    await prisma.like.deleteMany({ where: { postId } });
    await prisma.comment.deleteMany({ where: { postId } });
    const auth = new google.auth.GoogleAuth({
      keyFile: "./src/config/drive.json",
      scopes: ["https://www.googleapis.com/auth/drive"],
    });
    const drive = google.drive({
      version: "v3",
      auth,
    });
    await drive.files.delete({ fileId: post.media });
    return res.status(StatusCodes.Accepted).json({
      ResponseCode: StatusCodes.Success,
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
