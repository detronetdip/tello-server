import { Router } from "express";
import cookieOption from "../../config/Cookie";
const route = Router();
route.get("/api/v1/logout", (req, res) => {
  
  res.cookie("accessToken", "", {
    ...cookieOption,
    maxAge: 0,
  });
  res.cookie("refreshToken", "", {
    ...cookieOption,
    maxAge: 0,
  });
  res.status(200).json({
    msg:"logged out"
  })
});
export default route;
