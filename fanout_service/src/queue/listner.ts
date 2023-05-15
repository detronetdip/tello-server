import { Connection } from "amqplib";
import { generateNewsFeed } from "../controller/generateNewsFeed";

export const queueListner = async (con: Connection) => {
  const channel = await con.createChannel();
  channel.assertQueue("post-service");
  channel.consume("post-service", (msg) => {
    generateNewsFeed(JSON.parse(msg.content.toString()));
    channel.ack(msg);
  });
};
