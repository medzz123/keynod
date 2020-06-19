import models from "../models";

export const createUsersWithMessages = async (date) => {
  await models.User.create(
    {
      username: "ugendo",
      email: "hello@robin.com",
      password: "ugendo12",
      role: "ADMIN",
      messages: [
        {
          text: "Published the Road to learn React",
          createdAt: date.setSeconds(date.getSeconds() + 1),
        },
      ],
    },
    {
      include: [models.Message],
    }
  );

  await models.User.create(
    {
      username: "bugendo",
      email: "hello@david.com",
      password: "bugendo12",
      role: "USER",
      messages: [
        {
          text: "Happy to release ...",
          createdAt: date.setSeconds(date.getSeconds() + 1),
        },
        {
          text: "Published a complete ...",
          createdAt: date.setSeconds(date.getSeconds() + 1),
        },
      ],
    },
    {
      include: [models.Message],
    }
  );
};
