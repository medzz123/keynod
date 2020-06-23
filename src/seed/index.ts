import models from "../models";
import { readAndTransform } from "./convert";

export const createUsersWithMessages = async () => {
  const data = await readAndTransform();

  data.forEach(async (el) => {
    await models.User.create(el, { include: [models.Message] });
  });
};
