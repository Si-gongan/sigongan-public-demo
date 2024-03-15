import axios from 'axios';
import {
  SearchDetailParamsModel,
  SearchDetailResponseModel,
  ProductsParamsModel,
  ProductsResponseModel,
} from './types';

const api = axios.create({
  baseURL: import.meta.env.VITE_COUPANG_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_COUPANG_API_TOKEN}`,
  },
});

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

export const getProduct = async (params: SearchDetailParamsModel) => {
  const response = await api<SearchDetailResponseModel>(params.id);
  return response.data;
};
