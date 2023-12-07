import axios, { AxiosResponse } from 'axios';
import {
  ChatParamsModel,
  ChatResponseModel,
  ReviewParamsModel,
  ReviewResponseModel,
} from './types';

const api = axios.create({
  baseURL: process.env.REACT_APP_AI_API_URL,
});

const aiApi = {
  getReview: (
    params: ReviewParamsModel
    // abortController: AbortController
  ): Promise<AxiosResponse<ReviewResponseModel>> => {
    const url = `https://www.coupang.com/vp/products/${params.group}`;
    return api.post<ReviewResponseModel>('/product-review', { url });
  },
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

export default aiApi;
