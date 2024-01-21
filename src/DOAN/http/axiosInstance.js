import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});

axiosInstance.interceptors.request.use((config) => {
  // handle before request is sent
  return config;
}, (error) => {
  // handle request error
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => {
  // handle response data
  return response;
}, (error) => {
  // handle response un-authen error
  if (error.response.status === 401) {
    console.log('3333');
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  return Promise.reject(error);
});

export default axiosInstance;