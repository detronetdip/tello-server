import mq from "amqplib";

export const connectQueue = async () => {
  const connection = await mq.connect("amqp://user:pass@localhost:5672");
  if (connection) {
    console.log("connected mq");
  } else {
    console.log("not connected mq");
  }
  return connection;
};
