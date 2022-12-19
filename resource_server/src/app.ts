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
import internalAPIRoutes from "./routes/internal/index";
import externalAPIRoutes from "./routes/api/index";
import { graphQlAuth } from "./middleware/graphQlAuth";

const PORT = process.env.PORT;
const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors(corsOption));
app.use(cookie());
app.use(express.json());

app.use(internalAPIRoutes);
app.use(externalAPIRoutes);

async function startServer() {
  const graphQlServer = new ApolloServer({
    typeDefs: typedefs,
    resolvers: resolvers,
    context: graphQlAuth,
  });
  await graphQlServer.start();
  graphQlServer.applyMiddleware({ app });
  app.listen(PORT, () => console.log(`resourse server started at : ${PORT}`)); // skipcq: JS-0002
}
startServer();
