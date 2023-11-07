/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../store/product-context';
import Product from './Product';
import { productsContainer, ulStyle } from './Products.styles';
import ProductsSkeleton from '../UI/Loading/ProductsSkeleton';
import useAxios from '../../hooks/useAxios';
import coupangApi from '../../api/axios/coupang/api';
import { ProductsResponseModel } from '../../api/axios/coupang/types';
import LoadMoreButton from './LoadMoreButton';

const Products: React.FC = () => {
  const { products, query, setNewProducts } = useContext(ProductContext);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState<number>();
  const [productCount, setProductCount] = useState<number>();

  const {
    response,
    isLoading,
    error,
    sendRequest: fetchProducts,
  } = useAxios(coupangApi.getProducts, { query, page });

  const toNextPage = () => {
    setPage((prevPage) => {
      if ((lastPage && prevPage >= lastPage) || productCount === 0) {
        return prevPage;
      }
      return prevPage + 1;
    });
  };

  useEffect(() => {
    if (query.trim().length > 0 && products.length === 0) {
      setPage(1);
      fetchProducts();
    }
  }, [query]);

  useEffect(() => {
    if (query.trim().length > 0 && page !== 1) {
      fetchProducts();
    }
  }, [page]);

  useEffect(() => {
    if (!isLoading && !error && response?.data.products) {
      setLastPage(response.data.last_page);
      setProductCount(response.data.count);
      const newProducts = response?.data.products.map(
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
  }, [response?.data.products]);

  return (
    <>
      <div css={productsContainer}>
        <ul css={ulStyle}>
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          {/* TODO: UI 개선 */}
          {isLoading && <ProductsSkeleton />}
        </ul>
      </div>
      <LoadMoreButton toNextPage={toNextPage} isLoading={isLoading} />
    </>
  );
};

export default Products;
