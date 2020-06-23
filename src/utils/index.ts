import { AuthenticationError } from "apollo-server-express";
import jwt from "jsonwebtoken";
import env from "../env";

export const getMe = async (req) => {
  const token = req.headers["x-token"];

  if (token) {
    try {
      return await jwt.verify(token, env.SECRET);
    } catch (e) {
      throw new AuthenticationError("Your session expired. Sign in again.");
    }
  }
};

export const formatError = (error) => {
  // remove the internal sequelize error message
  // leave only the important validation error
  const message = error.message
    .replace("SequelizeValidationError: ", "")
    .replace("Validation error: ", "");

  return {
    ...error,
    message,
  };
};

export const toCursorHash = (string: string) =>
  Buffer.from(string).toString("base64");

export const fromCursorHash = (string: string) =>
  Buffer.from(string, "base64").toString("ascii");

export const createToken = async (user, secret: string, expiresIn: string) => {
  const { id, email, username, role } = user;
  return await jwt.sign({ id, email, username, role }, secret, {
    expiresIn,
  });
};
