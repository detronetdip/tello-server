import { Router } from "express";
import { Controller } from "../../controller";
import { Auth } from "../../middleware/authMiddleware";
import { validate } from "../../utils/validate";
import { validationSchema } from "../../validator";

const route = Router();

route.post(
  "/api/v1/addfriends",
  validate(validationSchema.addFriendsSchema),
  Controller.addFriend
);
export default route;
