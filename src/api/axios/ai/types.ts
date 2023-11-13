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

export interface ChatParamsModel {
  text: string;
  data?: {
    state: number;
    threadId: string;
  };
}

export interface RecommendedProduct {
  name: string;
  price: number;
  rating: number;
  rating_total_count: number;
  thumbnail: string;
  link: string;
}

export interface ChatResponseModel {
  answer: string;
  data: {
    state: number;
    thread_id: string;
    questions: string[];
    products?: RecommendedProduct[];
  };
}
