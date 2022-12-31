import axios from 'axios';
import router from 'vue-router';
import AuthService from './auth';
import UsersService from './users';

const API_ENVS = {
  production: '',
  local: 'http://localhost:3000',
};

const httpClient = axios.create({
  baseURL: API_ENVS.local,
});

httpClient.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token');
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const canThrowAnError =
      error.request.status === 0 || error.response.status === 500;

    if (canThrowAnError) {
      throw new Error(error.message);
    }

    if (error.response.status === 401) {
      router.push('/');
    }
    return error;
  }
);

export default {
  auth: AuthService(httpClient),
  users: UsersService(httpClient),
};
