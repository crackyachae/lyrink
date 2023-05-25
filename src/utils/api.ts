import axios from 'axios';

import config from '@/configs/config';

const instance = axios.create({
  baseURL: `${config.baseUrl}/api`,
  timeout: 1000,
});

instance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
