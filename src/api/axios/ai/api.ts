import axios, { AxiosResponse } from 'axios';
import { ChatParamsModel, ChatResponseModel, ReportParamsModel } from './types';

const api = axios.create({
  baseURL: process.env.REACT_APP_AI_API_URL,
});

const aiApi = {
  // 현재 사용 안 함
  getReport: (params: ReportParamsModel) => {
    const defaultParams: ReportParamsModel = {
      id: '',
      stream: false,
      template: '',
      basic_info: '',
      detailed_info: '',
    };
    return api.post('/report', { ...defaultParams, ...params });
  },
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
