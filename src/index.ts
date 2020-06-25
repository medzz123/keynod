import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import DataLoader from 'dataloader';
import express from 'express';
import { constraintDirective } from 'graphql-constraint-directive';
import depthLimit from 'graphql-depth-limit';
import { makeExecutableSchema } from 'graphql-tools';

import models, { sequelize } from './models';
import resolvers from './resolvers';
import typeDefs from './schema';
import { formatError, getMe } from './utils';
import AuthDirective from './utils/directives/AuthorizationDirective';
import { environmentVariables } from './utils/env';
import loaders from './utils/loaders';
import { createUsersWithMessages } from './utils/seed';

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
  tracing: environmentVariables.DEBUG,
  validationRules: [depthLimit(5)],
  formatError,
  // @ts-ignore
  context: async ({ req }) => {
    if (req) {
      const me = await getMe(req);

      return {
        models,
        me,
        secret: environmentVariables.SECRET,
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

server.applyMiddleware({ app, path: '/' });

sequelize
  .sync({
    force: environmentVariables.IS_TEST || environmentVariables.RESET_DB,
  })
  .then(async () => {
    if (environmentVariables.IS_TEST || environmentVariables.RESET_DB) {
      createUsersWithMessages();
    }

    app.listen({ port: environmentVariables.PORT }, () => {
      console.log(
        `Apollo Server running on http://localhost:${environmentVariables.PORT}/`
      );
    });
  });
