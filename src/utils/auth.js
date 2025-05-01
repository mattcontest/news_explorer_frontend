export const signUp = async () => {
  return new Promise((resolve, reject) => {
    resolve({ message: "User succesfully registered" });
  });
};

export const signIn = async () => {
  return new Promise((resolve, reject) => {
    resolve({ token: "fake-jwt-token" });
  });
};

export const checkToken = async () => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "Mattco", email: "test@test.com", _id: "fake-id" },
    });
  });
};
