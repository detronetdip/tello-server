import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { prisma } from "../prisma_connection/index";
import { getData, setData } from "../cache";
export const search = async (req: Request, res: Response) => {
  try {
    const { q } = req.query;
    const data = await getData(`${q}-QUERY`);
    if (data) {
      return res.status(StatusCodes.Success).json({
        ResponseCode: StatusCodes.RegistrationSuccessful,
        message: ErrorMessages.Successfull,
        data,
      });
    } else {
      const users = await prisma.user.findMany({
        where: {
          OR: [
            {
              username: {
                contains: String(q),
                mode:'insensitive'
              },
            },
            {
              firstname: {
                contains: String(q),
                mode:'insensitive'
              },
            },
            {
              lastname: {
                contains: String(q),
                mode:'insensitive'
              },
            },
          ],
        },
        select: {
          id: true,
          username: true,
          firstname: true,
          lastname: true,
        },
        take: 10,
      });
      await setData(String(q), JSON.stringify(users), 30);
      return res.status(StatusCodes.Success).json({
        ResponseCode: StatusCodes.Success,
        message: ErrorMessages.Successfull,
        data: users,
      });
    }
  } catch (error) {
    return res.status(StatusCodes.ServerError).json({
      ResponseCode: StatusCodes.InternalServerError,
      message: ErrorMessages.ServerError,
      error,
    });
  }
};
