import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  headers: {},
  timeout: 60000, // 1 min
});

// request interceptor
axiosInstance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  return config;
});


const handleError = async (statusCode: number) => {
  if (statusCode === 401) {
    window.location.href = '/login';
  }
};


// response interceptor
axiosInstance.interceptors.response.use((response) => {
  handleError(response?.data?.code);
  return response;
}, (error) => { // normal cases will appear here.
  handleError(error?.response?.status);
  return Promise.reject(error?.response || error);
});


export default axiosInstance;
