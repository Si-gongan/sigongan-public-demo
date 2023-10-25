import { ProductDetailModel } from '../../types/product';

export interface ProductsResponseModel {
  id: number;
  name: string;
  thumbnail: string;
  price: string;
  url: string;
}

export interface ProductParamsModel {
  id: string;
}

export interface ProductResponseModel {
  product: ProductDetailModel;
}
