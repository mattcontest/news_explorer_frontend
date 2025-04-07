import { checkResponse } from "./api";

let date = Date.now();

export const getNews = ({ q, apiKey, from, to, pageSize }) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${q}&apiKey=${APIkey}`
  ).then(checkResponse);
};

//Should be hidden or added to the gitignore
export const APIkey = "8788558558194f3fbcc8a11c3f01f59f";
