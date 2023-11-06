/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useRef } from 'react';
import { ProductContext } from '../../store/product-context';
import Product from './Product';
import { productsContainer, ulStyle } from './Products.styles';
import ProductsSkeleton from '../UI/Loading/ProductsSkeleton';
import { AxiosError } from 'axios';

interface Props {
  isLoading: boolean;
  error?: AxiosError;
  toNextPage: () => void;
}

const Products: React.FC<Props> = (props) => {
  const { isLoading, toNextPage } = props;
  const { products } = useContext(ProductContext);
  const productsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
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
  }, []);

  return (
    <div css={productsContainer}>
      <ul css={ulStyle}>
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        {isLoading &&
          Array(15)
            .fill(null)
            .map((_, i) => <ProductsSkeleton key={i} />)}
        <div ref={productsEndRef} />
      </ul>
    </div>
  );
};

export default Products;
