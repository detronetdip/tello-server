import dotEnv from "dotenv";
dotEnv.config();
import cors from "cors";
import express from "express";
import cookie from "cookie-parser";
import { ApolloServer } from "apollo-server-express";
import resolvers from "./graphql/resolvers";
import typedefs from "./graphql/typedefs";
import corsOption from "./config/cors";
import helmet from "helmet";

const PORT = process.env.PORT;
const app = express();
async function createGraphQlServer() {
  const graphQlServer = new ApolloServer({
    typeDefs: typedefs,
    resolvers: resolvers,
    context: (req) => {
      return req;
    },
  });
  await graphQlServer.start();
  graphQlServer.applyMiddleware({ app });
  app.listen(PORT, () => console.log("resourse server started at : " + PORT)); // skipcq: JS-0002
}

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors(corsOption));
app.use(cookie());
app.use(express.json());
createGraphQlServer();
