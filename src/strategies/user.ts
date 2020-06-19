import adminStrategy from "./admin";

const userStrategy = (requestData = {}) => {
  const isAdmin = adminStrategy(requestData);
  if (isAdmin) {
    return true;
  }

  // @ts-ignore
  const { headers } = requestData;

  if (!headers || !headers.authorization) {
    return false;
  }

  return true;
};

export default userStrategy;
