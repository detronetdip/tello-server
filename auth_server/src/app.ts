import * as dotEnv from "dotenv";
dotEnv.config({
  path: "./src/.env/.env",
});
import cors from "cors";
import express from "express";
import Database_Connection from "./config/DB";
import cookie from "cookie-parser";
import defaultRoute from "./routes/Default";
import corsOption from "./config/cors";

Database_Connection;
const app = express();
const port = 3000;
app.use(cors(corsOption));
app.use(cookie());
app.use(defaultRoute);
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
