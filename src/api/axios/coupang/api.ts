import axios from 'axios';
import { ProductsParamsModel } from './types';

const api = axios.create({
  baseURL: process.env.REACT_APP_COUPANG_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_COUPANG_API_TOKEN}`,
  },
});

const coupangApi = {
  getProducts: (params: ProductsParamsModel) =>
    api.get('', { params: { keyword: params.query, page: params.page } }),
  getProduct: (id: string) => {
    if (!id) {
      throw new Error('invalid id');
    }
    return api.get(id);
  },
};

export default coupangApi;
