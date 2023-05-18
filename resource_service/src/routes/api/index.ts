import { Router } from "express";
import multer from "multer";
import { Controller } from "../../controller";
import { Auth } from "../../middleware/authMiddleware";
import { validate } from "../../utils/validate";
import { validationSchema } from "../../validator";

const route = Router();
const Multer = multer();

route.post(
  "/api/v1/addFriend",
  Auth,
  validate(validationSchema.addFriendsSchema),
  Controller.addFriend
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
  "/api/v1/upload",
  Auth,
  Multer.single("media"),
  Controller.UploadFile
);
route.delete(
  "/api/v1/delete-request",
  Auth,
  validate(validationSchema.DeleteSchema),
  Controller.Delete
);
route.put(
  "/api/v1/updateProfile",
  Auth,
  validate(validationSchema.updateProfileSchema),
  Controller.updateProfileDetails
);

route.post(
  "/api/v1/delete-post",
  Auth,
  validate(validationSchema.deletePostSchema),
  Controller.deletePost
);

route.get("/api/v1/me/:uid", Auth, Controller.myDetails);
route.get("/api/v1/requests/:uid", Auth, Controller.getAllequests);
route.get("/api/v1/search", Auth, Controller.search);
export default route;
