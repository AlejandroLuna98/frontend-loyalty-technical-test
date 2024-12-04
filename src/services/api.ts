import axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});
