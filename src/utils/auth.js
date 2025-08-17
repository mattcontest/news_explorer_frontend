import { BASE_URL } from "./constants";

export const signUp = async (email, name, password) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, name, password }),
  });
  const body = await res.json();
  if (!res.ok) {
    throw new Error(body.message || "Signup failed");
  }
  return body;

  // return fetch(`${BASE_URL}/signup`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ email, name, password }),
  // });

  // const body = await res.json();
};

export const parseBody = async (res) => {
  console.log("Check before parsing", res);
  const text = await res.text();
  if (!text) {
    return null;
  }
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
};

export const signIn = async ({ email, password }) => {
  console.log("STARTING signIn function with:", { email, password });
  console.log("BASE_URL is:", BASE_URL);
  console.log("About to make fetch request to:", `${BASE_URL}/signin`);

  const res = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  // const body = await res.json();
  const body = await parseBody(res);
  if (!res.ok) {
    throw new Error(body.message || `Error ${res.status}`);
  }
  return body;

  // return fetch(`${BASE_URL}/signin`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ email, password }),
  // })
  //   .then((res) => {
  //     console.log("Inside of res.json", res.status);
  //     console.log("Inside of res.json", res.ok);
  //     if (res.ok) {
  //       return res.json();
  //     }
  //     // throw new Error(res.message || "Signin failed");
  //     return Promise.reject(`Error ${res.message}`);
  //   })
  //   .catch((error) => {
  //     console.error("Fetch Error:", error);
  //     throw error;
  //   });
};

export const checkToken = async (token) => {
  const res = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    console.error("Token check failed", res.status, errorMessage);
    throw new Error("Token check failed: ", res.status);
  }

  return res.json();
};
