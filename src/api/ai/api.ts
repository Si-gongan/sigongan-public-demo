import axios from 'axios';
import { ReportParamsModel } from './types';

const api = axios.create({
  baseURL: process.env.REACT_APP_AI_API_URL,
});

const aiApi = {
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
};

export default aiApi;
