import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { prisma } from "../prisma_connection/index";
import axios from "axios";
import { NOTIFICATION_TYPES } from "../utils/utils";
export const addFriend=async (req:Request,res:Response)=>{
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
            ResponseCode: StatusCodes.InvalidCredential,
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
            ResponseCode: StatusCodes.AlredyInUse,
            message: ErrorMessages.AllRedyPresent
        })
    }
    await prisma.friends.create({
        data: {
            userId: userId,
            friendId: friendId,
        }
    })
    await axios.post(
        `${process.env.NOTIFICATION_SERVER_URL}/internal/notification`,
        {
          userId: friendId,
          notification: {
            content: "Your have a new friend request",
            type: NOTIFICATION_TYPES.REQUEST_ACCEPTED,
            redirect: "",
          },
        }
      );
    return res.status(StatusCodes.Success).json({
        ResponseCode: StatusCodes.RegistrationSuccessful,
        message: ErrorMessages.Successfull
    })

   }
   catch(error){
        return res.status(StatusCodes.ServerError).json({
            ResponseCode: StatusCodes.InternalServerError,
            message: ErrorMessages.ServerError
        })
   }
}