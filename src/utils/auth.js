import { BASE_URL } from "./constants";

export const signUp = async (email, username, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, username, password }),
  });
};

export const signIn = async ({ email, password }) => {
  console.log("STARTING signIn function with:", { email, password });
  console.log("BASE_URL is:", BASE_URL);

  console.log("About to make fetch request to:", `${BASE_URL}/signin`);
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      console.log("Inside of res.json", res.status);
      console.log("Inside of res.json", res.ok);
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Error ${res.status}`);
    })
    .catch((error) => {
      console.error("Fetch Error:", error);
      throw error;
    });
};

export const checkToken = async (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};
