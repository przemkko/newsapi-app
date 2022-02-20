import axios from 'axios';

export const baseClient = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  },
});
