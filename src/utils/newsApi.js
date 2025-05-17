import { checkResponse } from "./api";

// let date = Date.now();

export const getNews = ({ q }) => {
  const currentDate = new Date();
  const fromDate = new Date();
  fromDate.setDate(currentDate.getDate() - 7);
  return fetch(
    `https://newsapi.org/v2/everything?q=${q}&apiKey=${APIkey}&from=${fromDate.toISOString()}&pageSize=50`
  ).then(checkResponse);
};

//Should be hidden or added to the gitignore
// export const APIkey = "8788558558194f3fbcc8a11c3f01f59f";
export const APIkey = "e96e734cb0194eafae7a5c80c5eab1ca";
