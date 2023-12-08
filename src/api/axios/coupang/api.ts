import axios from 'axios';
import {
  ProductParamsModel,
  ProductResponseModel,
  ProductsParamsModel,
  ProductsResponseModel,
} from './types';

const api = axios.create({
  baseURL: process.env.REACT_APP_COUPANG_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_COUPANG_API_TOKEN}`,
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

export const getProduct = async (params: ProductParamsModel) => {
  const response = await api<ProductResponseModel>(params.id);
  return response.data;
};
