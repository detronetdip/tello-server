import dotEnv from "dotenv";
dotEnv.config({
  path: "./src/.env/.env",
});
import cors from "cors";
import express from "express";
import cookie from "cookie-parser";
import helmet from "helmet";
import { ApolloServer } from "apollo-server-express";
import resolvers from "./graphql/resolvers";
import typedefs from "./graphql/typedefs";
import corsOption from "./config/cors";

const PORT = process.env.PORT;
const app = express();
async function createGraphQlServer() {
  const graphQlServer = new ApolloServer({
    typeDefs: typedefs,
    resolvers: resolvers,
  });
  await graphQlServer.start();
  graphQlServer.applyMiddleware({ app });
  console.log("ok");
  app.listen(PORT, () => console.log("resourse server started" + PORT));
}

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors(corsOption));
app.use(cookie());
app.use(express.json());
createGraphQlServer();
