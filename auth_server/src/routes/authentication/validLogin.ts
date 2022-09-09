import { Router } from "express";
import { isLogedIn } from "../../controllers/checkIsLogin";
import { validV } from "../../middleware/v";
const route = Router();
route.get("/api/v1/validate", validV, isLogedIn);
export default route;
