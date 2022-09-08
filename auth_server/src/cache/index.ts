import { createClient } from "redis";
const client = createClient({
  url: "redis://@172.17.0.2:6379",
});

client.on("error", (err) => console.log("Redis Client Error", err));
client.on("connect", () => console.log("cache server conected"));
async function connectCache() {
  await client.connect();
}
export { connectCache };
