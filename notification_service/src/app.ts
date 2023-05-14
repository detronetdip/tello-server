import cookie from "cookie-parser";
import cors from "cors";
import dotEnv from "dotenv";
import express from "express";
import helmet from "helmet";
import { createServer } from "http";
import { connectCache, getData } from "./cache";
import corsOption from "./config/cors";
import internalAPIRoutes from "./routes/internal/index";
import { socketServer } from "./socket";
import { prisma } from "./prisma_connection";
import { v4 } from "uuid";

dotEnv.config();
const PORT = 5000;
const app = express();

connectCache();
app.use(helmet());
app.use(cors(corsOption));
app.use(cookie());
app.use(express.json());

app.use(internalAPIRoutes);

const server = createServer(app);

socketServer(server).then(({ socket, io }) => {
  app.post("/internal/notification", async (req, res) => {
    const { notification, userId, toAll } = req.body;
    socket.emit("notification", notification);
    {
      const socketId = await getData(userId + "-sokt");
      console.log(socketId);
      await prisma.notifications.create({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        data: {
          id:v4(),
          content: notification.content,
          redirect: notification.redirect,
          userId: userId,
          type: notification.type,
        },
      });
      io.to(socketId).emit("notification", notification);
    }
    res.send({ msg: "Sent successfully" });
  });
});

server.listen(PORT, () =>
  console.log(`notification server started at : ${PORT}`)
); // skipcq: JS-0002
