import { Server } from "socket.io";
import { delData, getData, setData } from "../cache";

export const socketServer = (server) =>
  new Promise((res, _rej) => {
    const io = new Server(server, {
      cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
      },
    });
    io.on("connection", (socket) => {
      console.log("connected new client", socket.id);
      socket.on("disconnect", async (disconnectSoket) => {
        console.log("Disconected:" + disconnectSoket + " " + socket.id);
        const skt = await getData(socket.id);
        await delData(skt + "-sokt");
        await delData(socket.id);
      });
      socket.on("store", async (event) => {
        console.log("hi");
        const old = await getData(event.uid + "-sokt");
        console.log("old socket: ", old);
        if (!old) {
          await setData(event.uid + "-sokt", event.sid);
          await setData(event.sid, event.uid);
        }
      });
      res({ socket, io });
    });
  });
