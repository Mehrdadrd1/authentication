import axios, { AxiosError } from "axios";
import { API_BASE_URL, AUTH_TOKEN_KEY } from "../../constants";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);

    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (error: AxiosError<any>) => {
    if (!error.response) {
      console.error("Network error or server unreachable");
      return Promise.reject(error);
    }

    const { status, data } = error.response;

    switch (status) {
      case 400:
        console.warn("400 Bad Request:", data);
        break;

      case 401:
        console.warn("401 Unauthorized – logging out");

        localStorage.removeItem(AUTH_TOKEN_KEY);

        window.location.href = "/login";
        break;

      case 403:
        console.warn("403 Forbidden");
        break;

      case 404:
        console.warn("404 Not Found");
        break;

      case 500:
        console.error("500 Server Error");
        break;

      default:
        console.error(`HTTP ${status} Error`);
    }

    return Promise.reject(error);
  }
);
