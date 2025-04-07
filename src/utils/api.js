// import { BASE_URL } from "./constants";

function checkResponse(res) {
  if (res.ok) {
    console.log("cargo", res);
    return res.json();
  } else {
    return Promise.reject(`Error ${res.status}`);
  }
}

export { checkResponse };
