import e from "cors";
import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { prisma } from "../prisma_connection/index";
export const Delete = async (req: Request, res: Response) =>{
    try{
        const { reqId }= req.body;
        const targetId = await prisma.friends.findFirst({
            where: {
             id: reqId,
            },
          });
          if(!targetId){
            return res.status(StatusCodes.BadRequest).json({
                ResponseCode: StatusCodes.BadRequest,
                message: ErrorMessages.BadRequest,
              });
          }
         await prisma.friends.delete({
            where: {
              id: reqId,
            },
          })
          return res.status(StatusCodes.Success).json({
            ResponseCode: StatusCodes.Success,
            message: ErrorMessages.Successfull,
          });
    }
    catch(error){
        return res.status(StatusCodes.ServerError).json({
            ResponseCode: StatusCodes.InternalServerError,
            message: ErrorMessages.ServerError,
          });
    }
}