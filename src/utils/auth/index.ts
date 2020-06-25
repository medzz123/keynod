import { ForbiddenError } from 'apollo-server';

export const isAuthenticated = (args, context) => {
  const { me } = context;

  if (!me) {
    throw new ForbiddenError('Not authenticated as user.');
  }
};

export const isRole = (args, context, requiredRole) => {
  isAuthenticated(args, context);

  const {
    me: { role },
  } = context;

  if (role === 'ADMIN') {
    return;
  }

  if (!(role === requiredRole)) {
    throw new ForbiddenError(`Not authorized as ${requiredRole}.`);
  }
};

export const isMessageOwner = async (args, context) => {
  const { id } = args;
  const { models, me } = context;

  const message = await models.Message.findByPk(id, { raw: true });

  if (message.userId !== me.id) {
    throw new ForbiddenError('Not authenticated as owner.');
  }
};
