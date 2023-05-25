import cookie from "cookie-parser";
import cors from "cors";
import dotEnv from "dotenv";
import express from "express";
import helmet from "helmet";
import { createServer } from "http";
import { connectCache, getData } from "./cache";
import corsOption from "./config/cors";
import externalAPIRoutes from "./routes/api/index";
import { socketServer } from "./socket";
dotEnv.config();

const PORT = process.env.PORT;
const app = express();

const server = createServer(app);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
socketServer(server).then(({ socket, io }) => {
  app.post("/message", async (req, res) => {
    const { senderId, receiverId, message } = req.body;
    console.log({ senderId, receiverId, message })
    // socket.emit("message", notification);
    {
      const socketId = await getData(receiverId + "-sokt-msg");
      console.log(socketId);

      io.to(socketId).emit("message", {senderId, receiverId, message});
    }
    res.send({ msg: "Sent successfully" });
  });
});

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors(corsOption));
app.use(cookie());
app.use(express.json());

app.use(externalAPIRoutes);
async function startServer() {
  await connectCache();

  server.listen(PORT, () =>
    console.log(`resourse server started at : ${PORT}`)
  ); // skipcq: JS-0002
}
startServer();


