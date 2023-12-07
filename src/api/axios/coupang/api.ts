import axios from 'axios';
import { ProductsParamsModel, ProductsResponseModel } from './types';

const api = axios.create({
  baseURL: process.env.REACT_APP_COUPANG_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_COUPANG_API_TOKEN}`,
  },
});

const coupangApi = {
  // TODO: react-query 사용
  getProduct: (id: string) => {
    if (!id) {
      throw new Error('invalid id');
    }
    return api.get(id);
  },
};

export const getProducts = async (params: ProductsParamsModel) => {
  const response = await api('', {
    params: { keyword: params.query, page: params.pageParam },
  });

  const data: ProductsResponseModel = {
    ...response.data,
    lastPage: response.data.last_page,
  };

  return data;
};

export default coupangApi;
