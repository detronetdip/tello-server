import { Router } from "express";
import { sendRes } from "../controllers/res";
import { resCheck } from "../middleware/auth";
const route = Router();
route.get("/res", resCheck,sendRes);
export default route;
