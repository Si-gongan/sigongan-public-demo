export interface ReportParamsModel {
  id: string;
  stream?: boolean;
  template?: string;
  basic_info?: string; // any
  detailed_info?: string; // any
}

export interface ReportResponseModel {
  answer: string;
}

export interface CaptionParamsModel {
  id: string;
  url?: string;
  stream?: boolean;
  template?: string;
  meta_data?: string; // any
}

export interface CaptionResponseModel {
  answer: string;
}
