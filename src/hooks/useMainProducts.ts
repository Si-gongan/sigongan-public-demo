import { useSuspenseQuery } from '@tanstack/react-query';
import { Category } from '../types/product';
import { getBestProducts, getGoldBoxProducts } from '../api/axios/ai/api';
import { useState } from 'react';

const useMainProducts = (
  type: 'best-products' | 'gold-box' = 'best-products',
  category?: Category
) => {
  const [currentPage, setCurrentPage] = useState(0);
  const queryKey = [type, category && { category }];
  const queryFn = () =>
    type === 'best-products'
      ? getBestProducts({ category: category?.id })
      : getGoldBoxProducts();

  const { data, error } = useSuspenseQuery({
    queryKey,
    queryFn,
  });

  // 상품 전체
  const products = data.products;

  // 4개씩 잘랐을 때 페이지 (인덱스) 개수 - 모바일
  const totalPage = Math.ceil(products.length / 4) - 1;

  // 상품 4개씩 분할 - 모바일
  const productChunks = [];
  for (let i = 0; i < products.length; i += 4) {
    productChunks.push(products.slice(i, i + 4));
  }

  const toPrevPage = () => {
    if (currentPage === 0) {
      setCurrentPage(totalPage);
      return;
    }
    setCurrentPage((prev) => prev - 1);
  };

  const toNextPage = () => {
    if (currentPage === totalPage) {
      setCurrentPage(0);
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  return {
    products,
    totalPage,
    productChunks,
    error,
    currentPage,
    toPrevPage,
    toNextPage,
  };
};

export default useMainProducts;
