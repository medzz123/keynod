import "dotenv/config";

import cors from "cors";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import DataLoader from "dataloader";
import { constraintDirective } from "graphql-constraint-directive";
import { makeExecutableSchema } from "graphql-tools";
import depthLimit from "graphql-depth-limit";

import resolvers from "./resolvers";
import typeDefs from "./schema";
import models, { sequelize } from "./models";
import loaders from "./loaders";
import env from "./env";
import { formatError, getMe } from "./utils";
import { createUsersWithMessages } from "./seed";
import AuthDirective from "./directives/AuthorizationDirective";

const app = express();

app.use(cors());

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers,
  // @ts-ignore
  schemaDirectives: { auth: AuthDirective },
  schemaTransforms: [constraintDirective()],
});

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
  tracing: env.DEBUG,
  validationRules: [depthLimit(5)],
  formatError,
  // @ts-ignore
  context: async ({ req }) => {
    if (req) {
      const me = await getMe(req);

      return {
        models,
        me,
        secret: process.env.SECRET,
        loaders: {
          user: new DataLoader((keys) => loaders.user.batchUsers(keys, models)),
          vehicle: new DataLoader((keys) =>
            loaders.vehicle.batchVehicles(keys, models)
          ),
          customer: new DataLoader((keys) =>
            loaders.customer.batchCustomers(keys, models)
          ),
        },
      };
    }
  },
});

server.applyMiddleware({ app, path: "/" });

sequelize.sync({ force: env.IS_TEST || env.RESET_DB }).then(async () => {
  if (env.IS_TEST || env.RESET_DB) {
    createUsersWithMessages();
  }

  app.listen({ port: env.PORT }, () => {
    console.log(`Apollo Server running on http://localhost:${env.PORT}/`);
  });
});
