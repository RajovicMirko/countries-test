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
