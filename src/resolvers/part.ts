import { Resolvers } from '../typings/generated';

const partResolver: Resolvers = {
  Query: {
    parts: async (_, args, context) => {
      const { models } = context;

      const parts = await models.Part.findAll();

      return parts;
    },
    part: async (_, args, context) => {
      const { id } = args;
      const { models } = context;
      return await models.Part.findByPk(id);
    },
  },

  Mutation: {
    createPart: async (_, args, context) => {
      const { models } = context;
      const { input } = args;

      const part = await models.Part.create({
        ...input,
      });

      return part;
    },
  },
};

export default partResolver;
