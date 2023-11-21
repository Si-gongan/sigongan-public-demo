/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../store/product-context';
import Product from './Product';
import { productsContainer, ulStyle } from './Products.styles';
import useAxios from '../../hooks/useAxios';
import coupangApi from '../../api/axios/coupang/api';
import { ProductsResponseModel } from '../../api/axios/coupang/types';
import LoadMoreButton from './LoadMoreButton';
import ScrollToTopButton from './ScrollToTopButton';

const Products: React.FC = () => {
  const { products, query, page, addPage, setNewProducts } =
    useContext(ProductContext);
  const {
    response,
    isLoading,
    error,
    sendRequest: fetchProducts,
  } = useAxios(coupangApi.getProducts);
  const [isLastPage, setIsLastPage] = useState(
    sessionStorage.getItem('isLastPage') === 'true' ? true : false
  );
  const isLoadMoreAllowed = !isLastPage && products.length > 0;

  const toNextPage = () => {
    if (isLoadMoreAllowed) {
      addPage();
      fetchProducts({ query, page: page + 1 });
    }
  };

  useEffect(() => {
    if (query.trim().length > 0 && products.length === 0) {
      fetchProducts({ query, page });
    }
  }, [query, products.length]);

  useEffect(() => {
    const productsData = response?.data.products;
    if (!isLoading && !error && productsData) {
      if (page >= response.data.last_page || response.data.count < 15) {
        setIsLastPage(true);
        sessionStorage.setItem('isLastPage', 'true');
      } else {
        setIsLastPage(false);
        sessionStorage.setItem('isLastPage', 'false');
      }
      const newProducts = productsData.map(
        (product: ProductsResponseModel) => ({
          id: product.id,
          title: product.name,
          image: product.thumbnail,
          price: product.price,
          url: product.url,
        })
      );
      setNewProducts(newProducts);
    }
  }, [isLoading, error]);

  return (
    <>
      <div css={productsContainer}>
        <ul css={ulStyle}>
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
          {/* TODO: 로딩 UI 개선 */}
          {/* {isLoading && <ProductsSkeleton />} */}
        </ul>
        <LoadMoreButton
          toNextPage={toNextPage}
          isLoading={isLoading}
          showButton={products.length > 0}
          isLastPage={isLastPage}
        />
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default Products;
