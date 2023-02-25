import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { prisma } from "../prisma_connection";

export const updateProfileDetails = async (req: Request, res: Response) => {
  const { userId, email, username, bio, firstName, lastName, dob } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    if (!user)
      return res.status(StatusCodes.BadRequest).json({
        ResponseCode: StatusCodes.InvalidCredential,
        message: ErrorMessages.InvalidCredentials,
      });
    if (username) {
      const user = await prisma.user.findFirst({
        where: {
          username: username,
          AND: {
            NOT: {
              id: userId,
            },
          },
        },
      });

      if (user)
        return res.status(StatusCodes.Conflict).json({
          code: StatusCodes.AlredyInUse,
          msg: ErrorMessages.AllRedyPresent,
        });
    }
    if (email) {
      const user = await prisma.user.findFirst({
        where: {
          email: email,
          AND: {
            NOT: {
              id: userId,
            },
          },
        },
      });

      if (user)
        return res.status(StatusCodes.Conflict).json({
          code: StatusCodes.AlredyInUse,
          msg: ErrorMessages.AllRedyPresent,
        });
    }
    const updatedData = {
      email: email || user.email,
      username: username || user.username,
      bio: bio || user.bio,
      firstname: firstName || user.firstname,
      lastname: lastName || user.lastname,
      dob: dob || user.dob,
    };
    const data = await prisma.user.update({
      where: {
        id: userId,
      },
      data: updatedData,
    });
    return res.status(StatusCodes.Success).json({
      ResponseCode: StatusCodes.Accepted,
      message: ErrorMessages.Successfull,
    });
  } catch (error) {
    // if (error.response.status === StatusCodes.Conflict) {
    //   return res.status(StatusCodes.Conflict).json({
    //     code: StatusCodes.AlredyInUse,
    //     msg: ErrorMessages.AllRedyPresent,
    //   });
    // }
console.log(error);

    return res.status(StatusCodes.ServerError).json({
      ResponseCode: StatusCodes.InternalServerError,
      message: ErrorMessages.ServerError,
      error,
    });
  }
};
