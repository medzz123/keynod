import "dotenv/config";

import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import env from "./env";

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  introspection: true,
  playground: true,
  tracing: env.DEBUG,
  resolvers: {
    Query: {
      me: () => "Hi",
    },
  },
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: env.PORT }, () => {
  console.log(`Apollo Server running on http://localhost:${env.PORT}/graphql`);
});
