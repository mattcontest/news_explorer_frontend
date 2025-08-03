import { checkResponse } from "./api";

// let date = Date.now();

export const getNews = ({ q }) => {
  const currentDate = new Date();
  const fromDate = new Date();
  const APIkey = import.meta.env.VITE_API_KEY;
  fromDate.setDate(currentDate.getDate() - 7);
  return fetch(
    // `https://newsapi.org/v2/everything?q=${q}&apiKey=${APIkey}&from=${fromDate.toISOString()}&pageSize=50`
    `https://nomoreparties.co/news/v2/everything?q=${q}&apiKey=${APIkey}&from=${fromDate.toISOString()}&pageSize=50`
  ).then(checkResponse);
};
export const APIkey = import.meta.env.VITE_API_KEY;
