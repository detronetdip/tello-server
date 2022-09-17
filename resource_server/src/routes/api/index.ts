import { Router, Request, Response } from "express";
const route = Router();

route.get("/", (req: Request, res: Response) => {
  res.send("working resource-server");
});
export default route;
