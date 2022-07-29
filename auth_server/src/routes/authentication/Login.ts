import { Router } from "express";
import { handelLogin } from "../../controler/login";
import { validateLogin } from "../../middleware/validateLogin";
const route = Router();
route.post("/api/login", validateLogin, handelLogin);
export default route;
