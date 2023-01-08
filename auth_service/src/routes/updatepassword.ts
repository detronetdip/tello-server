import { Router } from "express";
import { updatePassword } from "../controllers/updatePassword";
import { validateUpdatePassword } from "../middleware/validateUpdatePassword";
import { resCheck } from "../middleware/auth";
const route = Router();
route.put(
  "/api/v1/accountSecurity",
  resCheck,
  validateUpdatePassword,
  updatePassword
);
export default route;
