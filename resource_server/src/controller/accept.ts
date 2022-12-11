import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { prisma } from "../prisma_connection/index";
export const accept=async (req:Request,res:Response)=>{
    try{
        const { reqId }=req.body;
        const id1= await prisma.friends.findFirst({
            where: {
                id: reqId,
            },
        })
        if(id1.isAccepted){
            return res.status(StatusCodes.BadRequest).json(
                {
                    ResponseCode: StatusCodes.AlredyInUse,
                    message: ErrorMessages.AllRedyPresent
                }
            )
        }
        await prisma.friends.update({
            where: { id: id1.id},
            data: { isAccepted: true}
        })
        return res.status(StatusCodes.Success).json(
            {
                ResponseCode: StatusCodes.Accepted,
                message: ErrorMessages.Successfull
            }
        )
       
    } catch(error){
        return res.status(StatusCodes.ServerError).json({
            ResponseCode: StatusCodes.ServerError,
            message: ErrorMessages.ServerError
        })
   }
}