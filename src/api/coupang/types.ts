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
  name: string;
  thumbnail: string;
  price: number;
  url: string;
  category: string;
  reviews: number;
  ratings: number;
}
