import { Router } from "express";
import { Controller } from "../../controller";
import { Auth } from "../../middleware/authMiddleware";
import { validate } from "../../utils/validate";
import { validationSchema } from "../../validator";

const route = Router();

route.post(
  "/api/v1/addFriend",
  Auth,
  validate(validationSchema.addFriendsSchema),
  Controller.addFriend
);
route.post(
  "/api/v1/post",
  Auth,
  validate(validationSchema.postSchema),
  Controller.userPost
);
route.post(
  "/api/v1/accept",
  Auth,
  validate(validationSchema.acceptSchema),
  Controller.accept
);
route.post(
  "/api/v1/block",
  Auth,
  validate(validationSchema.blockSchema),
  Controller.block
);
export default route;
