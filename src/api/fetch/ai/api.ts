import { ReportParamsModel } from '../../axios/ai/types';

const apiUrl = process.env.REACT_APP_AI_API_URL;

export const getReport = async (params: ReportParamsModel) => {
  const defaultParams = {
    stream: true,
    template: undefined,
    basic_info: undefined,
    detailed_info: undefined,
  };
  const response = await fetch(`${apiUrl}/report`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...defaultParams, ...params }),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.body?.getReader();
};
