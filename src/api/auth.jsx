import api from './axios';
import { API_PATHS } from './endpoints';

export const authAPI = {
  login: (credentials) => {
    return api.post(API_PATHS.AUTH.LOGIN, credentials);
  },
  register: (userData) => {
    return api.post(API_PATHS.AUTH.REGISTER, userData);
  },
  logout: () => {
    return api.post(API_PATHS.AUTH.LOGOUT);
  },
};