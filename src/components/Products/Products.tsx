/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useRef, useState } from 'react';
import { ProductContext } from '../../store/product-context';
import Product from './Product';
import { productsContainer, ulStyle } from './Products.styles';
import ProductsSkeleton from '../UI/Loading/ProductsSkeleton';
import useAxios from '../../hooks/useAxios';
import coupangApi from '../../api/axios/coupang/api';
import { ProductsResponseModel } from '../../api/axios/coupang/types';

const Products: React.FC = () => {
  const { products, query, setNewProducts, resetProducts } =
    useContext(ProductContext);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState<number>();
  const [productCount, setProductCount] = useState<number>();
  const productsEndRef = useRef<HTMLDivElement>(null);

  const {
    response,
    isLoading,
    error,
    sendRequest: fetchProducts,
  } = useAxios(coupangApi.getProducts, { query, page });

  const toNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (query.trim().length > 0) {
      resetProducts();
      setPage(1);
    }
  }, [query]);

  useEffect(() => {
    if (query.trim().length > 0) {
      fetchProducts();
    }
  }, [page]);

  useEffect(() => {
    if (!isLoading && !error && response?.data.products) {
      setLastPage(response.data.last_page);
      setProductCount(response.data.count);
      console.log('response.data.count:', response.data.count);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const loadNextDataCondition =
          entries[0].isIntersecting &&
          productCount !== 0 &&
          (!lastPage || page <= lastPage);
        if (loadNextDataCondition) {
          toNextPage();
        }
      },
      { threshold: 1.0 }
    );
    if (productsEndRef.current) {
      observer.observe(productsEndRef.current);
    }
    return () => {
      if (productsEndRef.current) {
        observer.unobserve(productsEndRef.current);
      }
    };
  }, [productCount, lastPage]);

  return (
    <div css={productsContainer}>
      <ul css={ulStyle}>
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        {/* TODO: UI 개선 */}
        {isLoading && <ProductsSkeleton />}
        <div ref={productsEndRef} />
      </ul>
    </div>
  );
};

export default Products;
