import dotEnv from "dotenv";
dotEnv.config();
import cors from "cors";
import express from "express";
import Database_Connection from "./config/DB";
import cookie from "cookie-parser";
import defaultRoute from "./routes/Default";
import registration from "./routes/authentication/Register";
import login from "./routes/authentication/Login";
import regen from "./routes/authentication/regen";
import corsOption from "./config/cors";
import helmet from "helmet";
import { connectCache } from "./cache";
import validLogin from "./routes/authentication/validLogin";
import UpdateEmail from "./routes/updateEmail";
import UpdatePassword from "./routes/updatepassword";
import validateOtp from "./routes/authentication/validateOtp";

Database_Connection; // skipcq: JS-0354
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
app.use(UpdateEmail);
app.use(UpdatePassword);
app.use(validateOtp);
connectCache();
app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`); // skipcq: JS-0002
});
