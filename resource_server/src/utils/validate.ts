import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { StatusCodes } from "../error_codes";

export const validator =
  (schema: Object) => (req: Request, res: Response, next: NextFunction) => {
    const { value, error } = Joi.compile(schema).validate(req.body);
    if (error) {
      const err = error.details.map((details) => details.message).join(", ");
      return res.status(StatusCodes.BadRequest).json({
        statusCode: StatusCodes.InsufficientArguments,
        message: err,
      });
    } else {
      req.body = value;
      next();
    }
  };
