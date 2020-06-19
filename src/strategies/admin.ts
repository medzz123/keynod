const adminStrategy = (requestData = {}) => {
  // @ts-ignore
  const { headers } = requestData;

  console.log("^^^^^^^^ ------------ ^^^^^^^^^^^");
  console.log("Requested Data", requestData);
  console.log("^^^^^^^^ ------------ ^^^^^^^^^^^");

  if (!headers || !headers.authorization) {
    return false;
  }

  return true;
};

export default adminStrategy;
