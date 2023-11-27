import axios, { AxiosResponse } from 'axios';
import { ChatParamsModel, ChatResponseModel } from './types';

const api = axios.create({
  baseURL: process.env.REACT_APP_AI_API_URL,
});

const aiApi = {
  getChat: (
    params: ChatParamsModel
  ): Promise<AxiosResponse<ChatResponseModel>> => {
    const text = params.text;
    const data = {
      state: params.data?.state,
      thread_id: params.data?.threadId,
    };
    return api.post<ChatResponseModel>('/shopping-chat', { text, data });
  },
};

export default aiApi;
