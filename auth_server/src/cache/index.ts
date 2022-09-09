import { createClient } from "redis";
const client = createClient({
  url: process.env.CACHE_URL,
});

client.on("error", (err) => console.log("Redis Client Error", err));
client.on("connect", () => console.log("Cache server conected"));
async function connectCache() {
  await client.connect();
}
async function setData(key: string, value: string) {
  await client.set(key, value);
}
async function getData(key: string) {
  const val = await client.get(key);
  return val;
}
export { connectCache, setData, getData };
