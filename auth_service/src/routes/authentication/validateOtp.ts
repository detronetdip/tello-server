import { Router } from "express";
import { validateOtp } from "../../controllers/validateOTP";
import { validateRegenerateRequest } from "../../middleware/validateOtp";
const route = Router();
route.post("/api/v1/registration/validate-otp", validateRegenerateRequest, validateOtp);
export default route;
