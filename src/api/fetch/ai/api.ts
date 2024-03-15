import {
  ReportParamsModel,
  CaptionParamsModel,
  PriceParamsModel,
} from './types';

const apiUrl = import.meta.env.VITE_AI_API_URL;

export const getReport = async (
  params: ReportParamsModel,
  abortController: AbortController
) => {
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
    signal: abortController.signal,
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.body?.getReader();
};

export const getCaption = async (
  params: CaptionParamsModel,
  abortController: AbortController
) => {
  const defaultParams = {
    stream: true,
    template: undefined,
    meta_data: undefined,
  };
  const response = await fetch(`${apiUrl}/product-caption`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...defaultParams, ...params }),
    signal: abortController.signal,
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.body?.getReader();
};

export const getPriceDescription = async (
  params: PriceParamsModel,
  abortController: AbortController
) => {
  const defaultParams: PriceParamsModel = {
    id: '',
    stream: true,
  };
  const response = await fetch(`${apiUrl}/price-description`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...defaultParams, ...params }),
    signal: abortController.signal,
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.body?.getReader();
};
