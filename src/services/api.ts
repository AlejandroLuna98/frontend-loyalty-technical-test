import axios, { AxiosInstance, isAxiosError } from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: Number(process.env.REACT_APP_API_TIMEOUT),
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (isAxiosError(error)) {
      console.error('API Error:', error.message);
    }
    return Promise.reject(error);
  }
);
