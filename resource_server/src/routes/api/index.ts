import { Router } from "express";
import { Controller } from "../../controller";
import { Auth } from "../../middleware/authMiddleware";
import { validator } from "../../utils/validate";
import { addFriendsSchema } from "../../validator";

const route = Router();

route.post(
  "/api/v1/addfriends",
  validator(addFriendsSchema),
  Controller.addFriend
);
export default route;
