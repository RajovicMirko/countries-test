import { COUNTRIES_BASE_API_ENDPOINT } from "./constants";
import axios from "axios";

const http = axios.create({
  baseURL: COUNTRIES_BASE_API_ENDPOINT,
  timeout: 5000,
  headers: {
    "content-type": "application/json",
  },
});

export default http;

const encodeQueryData = (data) => {
  const query = Object.keys(data).reduce((result, key) => {
    if (!data[key]) return result;

    const valueUri = encodeURIComponent(data[key]);
    if (valueUri) return result + `${encodeURIComponent(key)}=${valueUri} `;
    return result;
  }, "?");

  if (query.length <= 1) return "";
  return query.trim().replace(" ", "&");
};

export const getApiUrl = (apiUrl, query = null) => {
  if (!!query) {
    const queryStr = encodeQueryData(query);
    const result = apiUrl + queryStr;
    return result;
  }

  return apiUrl;
};
