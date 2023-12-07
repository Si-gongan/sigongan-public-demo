export interface ProductModel {
  id: number;
  name: string;
  thumbnail: string;
  price: string;
}

export interface HistoryInput {
  price: number;
  regular_price: number;
  membership_price: number;
  created_at: string;
}

export interface History {
  price: number;
  regularPrice: number;
  membershipPrice: number;
  createdAt: string;
}

// detail 페이지에 필요한 데이터
export interface ProductDetailModel {
  // TODO: 쓸만한 데이터 더 채우기
  id: number;
  name: string;
  picture: string;
  price: number;
  group: string;
  url: string;
  category: string;
  reviews: number;
  ratings: number;
  histories: History[];
}

export type DetailTabType =
  | 'report'
  | 'caption'
  | 'price'
  | 'review'
  | undefined;
