import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { prisma } from "../prisma_connection/index";
export const getAllFriends = async (req: Request, res: Response) => {
  try {
    const userId = req.params.uid;
    const friends = await prisma.friends.findMany({
      where: {
        AND: [
          { isAccepted: true },
          {
            OR: [
              {
                userId,
              },
              { friendId: userId },
            ],
          },
        ],
      },
      include:{
        user:true,
        follower: true
      },
    });
    const fnd=friends.map(f=>{
        if(f.user.id===userId){
            return{
                id: f.follower.id,
                firstname: f.follower.firstname,
                lastname: f.follower.lastname,
                username: f.follower.username,
            }
        }else{
            return{
                id: f.user.id,
                firstname: f.user.firstname,
                lastname: f.user.lastname,
                username: f.user.username,
            }
        }
    }).filter(f=>f!=null)
    return res.status(StatusCodes.Success).json({
      ResponseCode: StatusCodes.RegistrationSuccessful,
      message: ErrorMessages.Successfull,
      data: fnd,
    });
  } catch (error) {
    return res.status(StatusCodes.ServerError).json({
      ResponseCode: StatusCodes.InternalServerError,
      message: ErrorMessages.ServerError,
      error,
    });
  }
};
