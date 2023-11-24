import { ProductDetailModel } from '../../../types/product';

export interface ProductsParamsModel {
  query: string;
  page: number;
}

// products 페이지에 필요한 데이터
export interface ProductsResponseModel {
  id: number;
  name: string;
  thumbnail: string;
  price: string;
}

export interface ProductParamsModel {
  id: string;
}

export interface ProductResponseModel {
  product: ProductDetailModel;
}
