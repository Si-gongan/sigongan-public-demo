import { CategoryId, MainProductDetailModel } from '../../../types/product';

// 채팅 관련 타입
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

export interface MainDetailParamsModel {
  url: string;
}

export interface MainDetailResponseModel {
  product: MainProductDetailModel;
}

interface ReviewParamsGroup {
  group: string;
}

interface ReviewParamsUrl {
  url: string;
}

export type ReviewParamsModel = ReviewParamsGroup | ReviewParamsUrl;

export interface ReviewResponseModel {
  pros: string[];
  cons: string[];
}

export interface BestProductsParams {
  category?: CategoryId;
}

export interface BestProduct {
  productId: number;
  productName: string;
  productPrice: number;
  productImage: string;
  productUrl: string;
  rank: number;
}

export interface BestProductsResponse {
  products: BestProduct[];
}

export interface GoldBoxResponse {
  products: BestProduct[];
}
