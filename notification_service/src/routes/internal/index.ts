import { Router } from "express";
import { Controller } from "../../controller";
import { validate } from "../../utils/validate";
import { validationSchema } from "../../validator";
const route = Router();

route.get(
  "/api/v1/notifications/:uid",
  Controller.getNotifications
);
route.delete(
  "/api/v1/notifications/:uid",
  Controller.deleteNotifications
);
route.post(
  "/api/internal/sent-otp",
  validate(validationSchema.sentOtp),
  Controller.sentOTP
);

export default route;
