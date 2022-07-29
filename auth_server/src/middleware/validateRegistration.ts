/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { validateEmail, validateUserName } from "../utils/validator";

export function validateRegistration(
  req: Request,
  res: Response,
  next: Function
) {
  const { email, username, password } = req.body;
  if(email===undefined || username===undefined || password===undefined){
    return res.status(StatusCodes.BadRequest).json({msg:"Insufficient Data"});
  }else if(!validateEmail(email) || !validateUserName(username)){
    return res.status(StatusCodes.BadRequest).json({msg:"Invalid Data"});
  }
  next();
}
