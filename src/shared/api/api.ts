import axios from 'axios';
// import { toast } from 'sonner';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     toast(error.response?.statusText || 'Unknown Error');
//     return Promise.reject(error);
//   },
// );
