import { Connection } from "amqplib";

export const queueSender=async (con:Connection)=>{
    const channel=await con.createChannel();
    return channel;
}
