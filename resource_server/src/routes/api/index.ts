import { Router } from "express";
import { Controller } from "../../controller";
import { Auth } from "../../middleware/authMiddleware";
import { validate } from "../../utils/validate";
import { validationSchema } from "../../validator";

const route = Router();

route.post(
  "/api/v1/accept",
  validate(validationSchema.addFriendsSchema),
  Controller.addFriend
);
route.post(
  "/api/v1/post",
  validate(validationSchema.postSchema),
  Controller.addFriend
);
export default route;
