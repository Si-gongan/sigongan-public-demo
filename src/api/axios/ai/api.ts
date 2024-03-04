import axios from 'axios';
import {
  BestProductsParams,
  BestProductsResponse,
  ChatParamsModel,
  ChatResponseModel,
  MainDetailParamsModel,
  MainDetailResponseModel,
  GoldBoxResponse,
  ReviewParamsModel,
  ReviewResponseModel,
} from './types';

const api = axios.create({
  baseURL: process.env.REACT_APP_AI_API_URL,
});

export const getMainDetail = async (params: MainDetailParamsModel) => {
  const response = await api.post<MainDetailResponseModel>('/product-detail', {
    url: params.url,
  });
  return response.data;
};

export const getReview = async (params: ReviewParamsModel) => {
  if ('group' in params) {
    const url = `https://www.coupang.com/vp/products/${params.group}`;
    const response = await api.post<ReviewResponseModel>('/product-review', {
      url,
    });
    return response.data;
  }

  if ('url' in params) {
    const response = await api.post<ReviewResponseModel>('/product-review', {
      url: params.url,
    });
    return response.data;
  }
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
  if (!params.category) {
    throw new Error('undefined category');
  }
  const response = await api.get<BestProductsResponse>(
    `/coupang/bestcategories/${params.category}`
  );
  return response.data;
};

export const getGoldBoxProducts = async () => {
  const response = await api.get<GoldBoxResponse>(`/coupang/goldbox`);
  return response.data;
};
