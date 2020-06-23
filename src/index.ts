import "dotenv/config";

import cors from "cors";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import DataLoader from "dataloader";

import resolvers from "./resolvers";
import schema from "./schema";
import models, { sequelize } from "./models";
import loaders from "./loaders";
import env from "./env";
import { formatError, getMe } from "./utils";
import { createUsersWithMessages } from "./seed";
import AuthDirective from "./directives/AuthorizationDirective";

const app = express();

app.use(cors());

const server = new ApolloServer({
  typeDefs: schema,
  introspection: true,
  playground: true,
  tracing: env.DEBUG,
  schemaDirectives: {
    auth: AuthDirective,
  },
  formatError,
  // @ts-ignore
  resolvers,
  context: async ({ req, connection }) => {
    if (connection) {
      return {
        models,
        loaders: {
          user: new DataLoader((keys) => loaders.user.batchUsers(keys, models)),
        },
      };
    }

    if (req) {
      const me = await getMe(req);

      return {
        models,
        me,
        secret: process.env.SECRET,
        loaders: {
          user: new DataLoader((keys) => loaders.user.batchUsers(keys, models)),
        },
      };
    }
  },
});

server.applyMiddleware({ app, path: "/" });

sequelize
  .sync({ force: env.IS_TEST || env.IS_PRODUCTION || env.RESET_DB })
  .then(async () => {
    if (env.IS_TEST || env.IS_PRODUCTION || env.RESET_DB) {
      createUsersWithMessages();
    }

    app.listen({ port: env.PORT }, () => {
      console.log(`Apollo Server running on http://localhost:${env.PORT}/`);
    });
  });
