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
