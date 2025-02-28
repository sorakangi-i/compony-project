import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 응답 인터셉터 (선택사항)
api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default api;