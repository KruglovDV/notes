import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  timeout: 5000,
});
