import { ForbiddenError } from 'apollo-server';

export const isAuthenticated = (args, context) => {
  const { me } = context;

  if (!me) {
    throw new ForbiddenError('Not authenticated!');
  }
};

export const isRole = (args, context, requiredRole) => {
  isAuthenticated(args, context);

  const {
    me: { role },
  } = context;

  if (role === requiredRole) {
    return;
  }

  throw new ForbiddenError(`You don't have enough permissions!`);
};
