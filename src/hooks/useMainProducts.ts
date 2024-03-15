import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Category } from '../types/product';
import { getBestProducts, getGoldBoxProducts } from '../api/axios/ai/api';

const useMainProducts = (
  type: 'best-products' | 'gold-box' = 'best-products',
  category?: Category,
  focusRef?: React.RefObject<HTMLDivElement>
) => {
  const [isReadPage, setIsReadPage] = useState(false); // fix: aria-live

  // react-responsive
  const isMedium = useMediaQuery({ maxWidth: 1056 });
  const isNarrow = useMediaQuery({ maxWidth: 767 });
  let chunkLength = 4;
  if (!isNarrow && isMedium) {
    chunkLength = 3;
  }

  // react-query
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

  // 상품 chunkLength 개씩 분할
  const productChunks = [];
  for (let i = 0; i < products.length; i += chunkLength) {
    productChunks.push(products.slice(i, i + chunkLength));
  }

  // 페이지 (인덱스) 관련
  const [currentPage, setCurrentPage] = useState(0);
  const totalPage = Math.ceil(products.length / chunkLength) - 1;
  if (currentPage > totalPage) {
    setCurrentPage(totalPage);
  }

  // 카테고리 변경 시 페이지 0으로 초기화 후 focus
  useEffect(() => {
    setCurrentPage(0);
    focusRef?.current?.focus();
  }, [category]);

  // 현재 보여질 상품 chunk
  const productChunk =
    currentPage <= totalPage
      ? productChunks[currentPage]
      : productChunks[totalPage];

  const navigatePage = (direction: 'prev' | 'next') => {
    switch (direction) {
      case 'prev':
        setCurrentPage((prev) => (prev !== 0 ? prev - 1 : totalPage));
        break;
      case 'next':
        setCurrentPage((prev) => (prev !== totalPage ? prev + 1 : 0));
        break;
    }
    focusRef?.current?.focus();
    setIsReadPage(true);
  };

  return {
    isReadPage,
    products,
    productChunks,
    productChunk,
    error,
    totalPage,
    currentPage,
    toPrevPage: () => navigatePage('prev'),
    toNextPage: () => navigatePage('next'),
  };
};

export default useMainProducts;
