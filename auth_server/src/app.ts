import * as dotEnv from "dotenv";
dotEnv.config({
  path: "./src/.env/.env",
});
import express from "express";
import Database_Connection from "./config/DB";

Database_Connection;
const app = express();
const port = 3000;
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
