/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { ProductContext } from '../../store/product-context';
import Product from './Product';
import { productsContainer, ulStyle } from './Products.styles';
import ProductsSkeleton from '../UI/Loading/ProductsSkeleton';
import { AxiosError } from 'axios';

interface Props {
  isLoading: boolean;
  error?: AxiosError;
}

const Products: React.FC<Props> = (props) => {
  const { isLoading } = props;
  const { products } = useContext(ProductContext);

  return (
    <div css={productsContainer}>
      <ul css={ulStyle}>
        {isLoading &&
          Array(15)
            .fill(null)
            .map((_, i) => <ProductsSkeleton key={i} />)}
        {!isLoading &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
};

export default Products;
