import { Router, Request, Response } from "express";
import { signToken } from "../utils/token";
const route = Router();
route.get("/", (req: Request, res: Response) => {
  res.send(signToken({ name: "strsdfing", uid: "string", email: "string" }, 3000000));
});
export default route;
