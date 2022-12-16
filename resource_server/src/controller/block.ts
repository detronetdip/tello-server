import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { prisma } from "../prisma_connection/index";
export const block=async (req:Request,res:Response)=>{
    try{
        const { reqId,action }=req.body;
        
        const id2=await prisma.friends.findFirst({
            where: {
                id: reqId,
            }
        })
        if(id2.block==action){
            return res.status(StatusCodes.BadRequest).json(
                {
                    ResponseCode: StatusCodes.AlredyInUse,
                    message: ErrorMessages.AllRedyPresent
                }
            )
        }
        
        if(action){
        await prisma.friends.update({
            where: { id: id2.id},
            data: { block : true}
        })
        return res.status(StatusCodes.Success).json(
            {
                ResponseCode: StatusCodes.Accepted,
                message: ErrorMessages.Successfull
            }
        )
    }
    await prisma.friends.update({
        where: { id: id2.id},
        data: { block : false}
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