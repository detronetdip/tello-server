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
export default route;
