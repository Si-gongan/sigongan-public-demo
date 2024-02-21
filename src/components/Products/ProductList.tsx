/** @jsxImportSource @emotion/react */

import { useEffect, useRef } from 'react';
import { InfiniteData } from '@tanstack/react-query';
import Product from './Product';
import { ulStyle } from './ProductList.styles';
import { ProductsResponseModel } from '../../api/axios/coupang/types';

interface Props {
  data: InfiniteData<ProductsResponseModel, unknown> | undefined;
}

function ProductList({ data }: Props) {
  const focusRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    focusRef?.current?.focus();
  }, [data?.pages.length]);

  return (
    <ul css={ulStyle} aria-label="검색 결과">
      {data?.pages?.map((page, idx) => {
        const lastIdx = data.pages.length - 1;
        const isLastPage = idx === lastIdx;
        return page.products.map((product, i) => {
          return (
            <Product
              key={product.id}
              product={product}
              focusRef={isLastPage && i === 0 ? focusRef : undefined}
            />
          );
        });
      })}
    </ul>
  );
}

export default ProductList;
