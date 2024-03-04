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
  histories: HistoryInput[];
  option: string;
  highest_price: number;
  lowest_price: number;
}

export interface MainProductDetailModel {
  name: string;
  price: number;
  ratings: number;
  reviews: number;
  thumbnail: string;
  productUrl: string;
  id: string;
  productId: string;
}

// 디테일 페이지 탭 (메인 상품)
export interface MainProductTab {
  id: string;
  url: string;
}

// 디테일 페이지 탭 (검색 상품)
export interface ProductTab {
  id: string;
  group: string;
  histories: History[];
}

export type DetailTabType =
  | 'report'
  | 'caption'
  | 'price'
  | 'review'
  | undefined;

export type CategoryId =
  | '1001'
  | '1002'
  | '1010'
  | '1011'
  | '1012'
  | '1013'
  | '1014'
  | '1015'
  | '1016'
  | '1017'
  | '1018'
  | '1019'
  | '1020'
  | '1021'
  | '1024'
  | '1025'
  | '1026'
  | '1029'
  | '1030';

export interface Category {
  id: CategoryId;
  icon: string;
  title: string;
  description: string;
}
