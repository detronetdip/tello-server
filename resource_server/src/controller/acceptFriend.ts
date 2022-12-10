// import { Prisma, prisma } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { prisma } from"../prisma_connection/index"
export const acceptFriend=async (req:Request,res:Response)=>{
   try{
    const { userId,friendId }=req.body;
    const user1 = await prisma.user.findFirst({
        where: {
            id: userId,
        },
    })
    const user2 = await prisma.user.findFirst({
        where: {
            id: friendId,
        },
    })
    if(!user1 || !user2){
        return res.status(StatusCodes.BadRequest).json({
            StatusCode: StatusCodes.InvalidCredential,
            message: ErrorMessages.InvalidCredentials
        })
    }
    const friends=await prisma.friends.findFirst({
        where: {
            userId: userId,
            friendId: friendId,
        },
    })
    if(friends){
        return res.status(StatusCodes.BadRequest).json({
            StatusCodes: StatusCodes.AlredyInUse,
            message: ErrorMessages.AllRedyPresent
        })
    }
    await prisma.friends.create({
        data: {
            userId: userId,
            friendId: friendId,
        }
    })

   }
   catch(error){
        return res.status(StatusCodes.ServerError).json({
            StatusCodes: StatusCodes.ServerError,
            message: ErrorMessages.ServerError
        })
   }
}