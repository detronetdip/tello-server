import { Router } from "express";
import { handelLogin } from "../../controllers/login";
import { validateLogin } from "../../middleware/validateLogin";
const route = Router();
route.post("/api/v1/login", validateLogin, handelLogin);
export default route;
