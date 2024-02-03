import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Category } from '../types/product';
import { getBestProducts, getGoldBoxProducts } from '../api/axios/ai/api';

const useMainProducts = (
  type: 'best-products' | 'gold-box' = 'best-products',
  category?: Category,
  focusRef?: React.RefObject<HTMLDivElement>
) => {
  // react-responsive
  const isMedium = useMediaQuery({ maxWidth: 1056 });
  const isNarrow = useMediaQuery({ maxWidth: 767 });
  let chunkLength = 4;
  if (!isNarrow && isMedium) {
    chunkLength = 3;
  }

  // react-query
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

  // chunkLength 개씩 잘랐을 때 페이지 (인덱스) 개수 - 모바일
  const totalPage = Math.ceil(products.length / chunkLength) - 1;

  // 상품 chunkLength 개씩 분할 - 모바일
  const productChunks = [];
  for (let i = 0; i < products.length; i += chunkLength) {
    productChunks.push(products.slice(i, i + chunkLength));
  }

  const toPrevPage = () => {
    if (currentPage !== 0) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage(totalPage);
    }
    focusRef?.current?.focus();
  };

  const toNextPage = () => {
    if (currentPage !== totalPage) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage(0);
    }
    focusRef?.current?.focus();
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
