import models from "../models";
import { readAndTransform } from "./convert";

export const createUsersWithMessages = async () => {
  const data = await readAndTransform();

  await models.User.create(
    {
      username: "ugendo",
      role: "ADMIN",
      email: "ugendo@hello.com",
      password: "bugendo",
      messages: [
        {
          text: "Sup",
          createdAt: new Date(),
        },
      ],
    },
    { include: [models.Message] }
  );

  data.forEach(async (el) => {
    await models.User.create(el, { include: [models.Message] });
  });
};
