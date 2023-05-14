import cookie from "cookie-parser";
import cors from "cors";
import dotEnv from "dotenv";
import express from "express";
import helmet from "helmet";
import { connectCache } from "./cache";
import corsOption from "./config/cors";
import defaultRoute from "./routes/Default";
import login from "./routes/authentication/Login";
import registration from "./routes/authentication/Register";
import logout from "./routes/authentication/logout";
import regen from "./routes/authentication/regen";
import validLogin from "./routes/authentication/validLogin";
import validateOtp from "./routes/authentication/validateOtp";
import UpdatePassword from "./routes/updatepassword";
dotEnv.config();

const app = express();
const port = 3000;
app.disable("x-powered-by");
app.use(helmet());
app.use(cors(corsOption));
app.use(cookie());
app.use(express.json());
app.use(registration);
app.use(login);
app.use(regen);
app.use(validLogin);
app.use(defaultRoute);
app.use(UpdatePassword);
app.use(validateOtp);
app.use(logout);
connectCache();
app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`); // skipcq: JS-0002
});
