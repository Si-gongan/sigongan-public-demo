import { ProductDetailModel, ProductModel } from '../../../types/product';

export interface ProductsParamsModel {
  query: string;
  pageParam: number;
}

// products 페이지에 필요한 데이터
export interface ProductsResponseModel {
  products: ProductModel[];
  page: number;
  lastPage: number;
  total: number;
}

export interface ProductParamsModel {
  id: string;
}

export interface ProductResponseModel {
  product: ProductDetailModel;
}
