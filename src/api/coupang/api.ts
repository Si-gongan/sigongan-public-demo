import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_COUPANG_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_COUPANG_API_TOKEN}`,
  },
});

const coupangApi = {
  getProducts: (query: string) => api.get('', { params: { keyword: query } }),
  getProduct: (id?: string) => api.get(id || ''),
};

export default coupangApi;
