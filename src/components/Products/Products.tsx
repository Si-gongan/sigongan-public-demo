/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { ProductContext } from '../../store/product-context';
import Product from './Product';
import { loaderContainer, productsContainer, ulStyle } from './Products.styles';
import { getProducts } from '../../api/axios/coupang/api';
import LoadMoreButton from './LoadMoreButton';
import { BarLoader } from 'react-spinners';

const Products: React.FC = () => {
  const { query } = useContext(ProductContext);

  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      // TODO: AxiosError
      queryKey: ['products', query],
      queryFn: ({ pageParam = 1 }) => getProducts({ pageParam, query }),
      getNextPageParam: (lastPage, pages) => {
        const isLastPage =
          lastPage.products.length < 15 || lastPage.lastPage === lastPage.page;
        return isLastPage ? undefined : pages.length + 1;
      },
      initialPageParam: 1,
      enabled: query.trim().length > 0,
    });

  return (
    <div css={productsContainer}>
      {!data && isLoading && (
        <div css={loaderContainer}>
          <BarLoader color="#aaa" speedMultiplier={1.2} />
        </div>
      )}
      {data && (
        <div>
          <ul css={ulStyle}>
            {data?.pages?.map(
              (page) =>
                page?.products.map((product) => (
                  <Product key={product.id} product={product} />
                ))
            )}
          </ul>
          <LoadMoreButton
            toNextPage={fetchNextPage}
            isFetching={isFetchingNextPage}
            isLastPage={!hasNextPage}
          />
        </div>
      )}
    </div>
  );
};

export default Products;
