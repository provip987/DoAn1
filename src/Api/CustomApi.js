// CustomApi.js
import axios from './APIAxios';

const API_BASE_URL = 'http://127.0.0.1:8000';

const fetchAllUser = () => {
  return axios.get(`${API_BASE_URL}/api/san-pham`);
};

axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const fetchProductDetails = async (productId) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/san-pham/${productId}`);
    return res; // Trả về toàn bộ response chứ không chỉ res.data
  } catch (error) {
    throw error;
  }
};

export { fetchAllUser };
