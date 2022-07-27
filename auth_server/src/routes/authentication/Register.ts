import { Router } from "express";
import { handelRegistration } from "../../controllers/registration";
import { validateRegistration } from "../../middleware/validateRegistration";
const route = Router();
route.post("/api/v1/registration", validateRegistration, handelRegistration);
export default route;
