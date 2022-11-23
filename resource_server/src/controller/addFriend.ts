import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";

export const addFriend=(req:Request,res:Response)=>{
    console.log("received");
    res.status(StatusCodes.Success).json({
        statusCode: StatusCodes.Accepted,
        message: ErrorMessages.Successfull
    })
}