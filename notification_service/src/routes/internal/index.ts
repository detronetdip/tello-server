import { Router } from "express";
import { Controller } from "../../controller";
import { validate } from "../../utils/validate";
import { validationSchema } from "../../validator";
const route = Router();

route.post(
  "/api/internal/passwordChanged",
  validate(validationSchema.passwordChangedSchema),
  Controller.passwordChangeNotification
);
route.post(
  "/api/internal/sent-otp",
  validate(validationSchema.sentOtp),
  Controller.sentOTP
);
export default route;
