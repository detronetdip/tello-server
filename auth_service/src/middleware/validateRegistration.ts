/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { validateEmail, validateUserName } from "../utils/validator";
import { ErrorMessages } from "../error_messages";
import { prisma } from "../prisma_connection";

export async function validateRegistration(
  req: Request,
  res: Response,
  next: Function
) {
  const { email, username, password, firstName, lastName } = req.body;
  if (
    email === undefined ||
    username === undefined ||
    password === undefined ||
    firstName === undefined ||
    lastName === undefined
  ) {
    return res.status(StatusCodes.Success).json({
      code: StatusCodes.InsufficientArguments,
      msg: ErrorMessages.InsufficientData,
    });
  } else if (!validateEmail(email) || !validateUserName(username)) {
    return res.status(StatusCodes.Success).json({
      code: StatusCodes.InvalidFormat,
      msg: ErrorMessages.MalformedData,
    });
  } else {
    try {
      const result = await prisma.user.findMany({
        where: {
          OR: [{ email: email }, { username: username }],
        },
      });

      if (result.length > 0) {
        return res.status(StatusCodes.Conflict).json({
          code: StatusCodes.AlredyInUse,
          msg: ErrorMessages.AllRedyPresent,
        });
      } else {
        next();
      }
    } catch (error) {
      return res.status(StatusCodes.ServerError).json({
        code: StatusCodes.InternalServerError,
        msg: ErrorMessages.ServerError,
      });
    }
  }
}
