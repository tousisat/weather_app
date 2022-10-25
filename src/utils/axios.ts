import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  timeout: 15000
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: { response: AxiosResponse; message: string }) {
    const errorMsg = error.response?.data?.errors?.[0]?.message || error.message;
    return Promise.reject(new Error(errorMsg));
  }
);

export { axiosInstance as axios };
