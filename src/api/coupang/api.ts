import axios from 'axios';
import { ProductsResponseModel } from './types';
import { ProductModel } from '../../types/product';

export const getProducts = async (query: string): Promise<ProductModel[]> => {
  const apiUrl = process.env.REACT_APP_COUPANG_API_URL || '';
  const apiToken = process.env.REACT_APP_COUPANG_API_TOKEN;

  const response = await axios.get(apiUrl, {
    params: {
      keyword: query,
    },
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });

  return response.data.products.map((product: ProductsResponseModel) => ({
    id: product.id,
    title: product.name,
    image: product.thumbnail,
    price: product.price,
    url: product.url,
  }));
};
