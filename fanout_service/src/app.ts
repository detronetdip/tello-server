import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import cookie from "cookie-parser";
import cors from "cors";
import dotEnv from "dotenv";
import express from "express";
import helmet from "helmet";
import corsOption from "./config/cors";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typedefs";
dotEnv.config();

const PORT = process.env.PORT;
const app = express();
 
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors(corsOption));
app.use(cookie());
app.use(express.json());

// app.use(internalAPIRoutes);
// app.use(externalAPIRoutes);

async function startServer() {

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: parseInt(PORT) },
  });

  console.log(`🚀 Server listening at: ${url}`);
}
startServer();
