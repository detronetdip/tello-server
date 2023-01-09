import dotEnv from "dotenv";
import cors from "cors";
import express from "express";
import cookie from "cookie-parser";
import corsOption from "./config/cors";
import helmet from "helmet";
import internalAPIRoutes from "./routes/internal/index";

dotEnv.config();
const PORT = process.env.PORT;
const app = express();


app.use(cors(corsOption));
app.use(cookie());
app.use(express.json());

app.use(internalAPIRoutes);


app.listen(PORT, () => console.log(`notification server started at : ${PORT}`)); // skipcq: JS-0002
