import { Router } from "express";
import { Controller } from "../../controller";
const route = Router();

route.get(
  "/api/v1/notifications/:uid",
  Controller.getNotifications
);
route.delete(
  "/api/v1/notifications/:uid",
  Controller.deleteNotifications
);

export default route;
