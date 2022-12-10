import { Router } from "express";
import { Controller } from "../../controller";
import { Auth } from "../../middleware/authMiddleware";
import { validate } from "../../utils/validate";
import { validationSchema } from "../../validator";

const route = Router();

route.post(
  "/api/v1/accept",
  validate(validationSchema.addFriendsSchema),
  Controller.acceptFriend
);
route.post(
  "/api/v1/post",
  validate(validationSchema.postSchema),
  Controller.acceptFriend
);
export default route;
