import { Router } from "express";
import { Controller } from "../../controller";
import { Auth } from "../../middleware/authMiddleware";
import { validate } from "../../utils/validate";
import { validationSchema } from "../../validator";
import multer from "multer";

const route = Router();
const Multer = multer();

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
route.post(
  "/api/v1/uploadFile",
  Auth,
  Multer.single("media"),
  // validate(validationSchema.blockSchema),
  Controller.UploadFile
);
route.post(
  "/api/v1/delete",
  Auth,
  validate(validationSchema.DeleteSchema),
  Controller.Delete
);
export default route;
