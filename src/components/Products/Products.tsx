/** @jsxImportSource @emotion/react */
import { useRecoilValue } from 'recoil';
import { useInfiniteQuery } from '@tanstack/react-query';
import { loaderContainer, productsContainer } from './Products.styles';
import { getProducts } from '../../api/axios/coupang/api';
import LoadMoreButton from './LoadMoreButton';
import { BarLoader } from 'react-spinners';
import queryState from '../../recoil/query';
import ProductList from './ProductList';

const Products: React.FC = () => {
  const query = useRecoilValue(queryState);

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
      staleTime: 300000,
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
          <ProductList data={data} />
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
