/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { ProductContext } from '../../store/product-context';
import Product from './Product';
import { productsContainer, ulStyle } from './Products.styles';

const Products: React.FC = () => {
  const { products } = useContext(ProductContext);

  return (
    <div css={productsContainer}>
      <ul css={ulStyle}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
