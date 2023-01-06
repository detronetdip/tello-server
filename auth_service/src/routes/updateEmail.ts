import { Router } from "express";
import { updateEmail } from "../controllers/updateEmail";
import { validateUpdateEmail } from "../middleware/validateUpdateEmail";
const route = Router();
route.put("/api/internal/updatePassword", validateUpdateEmail, updateEmail);
export default route;
