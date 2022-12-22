import { Router, Request, Response } from "express";
import { prisma } from "../../prisma_connection";
const route = Router();

route.post("/api/internal/createUser", async (req: Request, res: Response) => {
  const { username, firstName, lastName, userId } = req.body;
  await prisma.user.create({
    data: {
      id: userId,
      username,
      firstname: firstName,
      lastname: lastName,
    },
  });
  res.send(true);
});
export default route;
