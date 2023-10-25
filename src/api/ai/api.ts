import axios from 'axios';
import { ReportParamsModel, ReportResponseModel } from './types';

export const getReport = async (
  params: ReportParamsModel
): Promise<ReportResponseModel> => {
  const apiUrl = process.env.REACT_APP_AI_API_URL;

  // set default value
  const defaultParams = {
    stream: false,
    template: '',
    basic_info: '',
    detailed_info: '',
  };

  const updatedParams = { ...defaultParams, ...params };

  const response = await axios.post(`${apiUrl}/report`, updatedParams);

  return response.data;
};
