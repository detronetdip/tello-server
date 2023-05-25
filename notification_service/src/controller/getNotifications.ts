import { Request, Response } from "express";
import { prisma } from "../prisma_connection";
import { StatusCodes } from "../error_codes";

export async function getNotifications(req: Request, res: Response) {
  const notifications = await prisma.notifications.findMany({
    where: {
      userId: req.params.uid,
    },
  });

  return res.status(200).send({ status: StatusCodes.Success, notifications });
}
