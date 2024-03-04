interface ReportParams {
  stream?: boolean;
  template?: string;
  basic_info?: string; // any
  detailed_info?: string; // any
}

interface ReportParamsId extends ReportParams {
  id: string;
}

interface ReportParamsUrl extends ReportParams {
  url: string;
}

export type ReportParamsModel = ReportParamsId | ReportParamsUrl;

export interface ReportResponseModel {
  answer: string;
}

interface CaptionParams {
  stream?: boolean;
  template?: string;
  meta_data?: string; // any
}

interface CaptionParamsId extends CaptionParams {
  id: string;
}

interface CaptionParamsUrl extends CaptionParams {
  url: string;
}

export type CaptionParamsModel = CaptionParamsId | CaptionParamsUrl;

export interface CaptionResponseModel {
  answer: string;
}

export interface PriceParamsModel {
  id: string;
  history?: string; // 사용 안 함
  stream?: boolean;
}

export interface PriceResponseModel {
  answer: string;
}
