import axios from 'axios';
import {
  BestProductsParams,
  BestProductsResponse,
  ChatParamsModel,
  ChatResponseModel,
  GoldBoxResponse,
  ReviewParamsModel,
  ReviewResponseModel,
} from './types';

const api = axios.create({
  baseURL: process.env.REACT_APP_AI_API_URL,
});

export const getReview = async (params: ReviewParamsModel) => {
  const url = `https://www.coupang.com/vp/products/${params.group}`;
  const response = await api.post<ReviewResponseModel>('/product-review', {
    url,
  });
  return response.data;
};

export const getChat = async (params: ChatParamsModel) => {
  const text = params.text;
  const data = {
    state: params.data?.state,
    thread_id: params.data?.threadId,
  };
  const response = await api.post<ChatResponseModel>('/shopping-chat', {
    text,
    data,
  });
  return response.data;
};

export const getBestProducts = async (params: BestProductsParams) => {
  const response = await api.get<BestProductsResponse>(
    `/coupang/bestcategories/${params.category}`
  );
  return response.data;
};

export const getGoldBoxProducts = async () => {
  const response = await api.get<GoldBoxResponse>(`/coupang/goldbox`);
  return response.data;
};
