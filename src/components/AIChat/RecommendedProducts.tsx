/** @jsxImportSource @emotion/react */

// import { Link } from 'react-router-dom';
import { AssistantProduct } from '../../types/chat';
import ProductCard from '../UI/Card/ProductCard';
import * as styles from '../Products/Product.styles';

interface Props {
  products: AssistantProduct[];
}

const RecommendedProducts: React.FC<Props> = (props) => {
  const { products } = props;
  return (
    <div style={{ display: 'flex', margin: '8px -4px' }}>
      {products.map((product, index) => {
        const price = `${product.price.toLocaleString()}원`;
        return (
          <ProductCard key={index} isLoading>
            {/* TODO: <Link to={`/detail/${product.id}`}> */}
            <div>
              <div css={styles.imageWrapper}>
                <img
                  css={styles.image}
                  src={product.thumbnail}
                  alt={product.name}
                />
              </div>
              <div css={styles.contentTitle}>
                <h2 css={styles.title}>{product.name}</h2>
              </div>
              <div css={styles.contentPrice}>
                <div css={styles.priceWrapper}>{price}</div>
              </div>
            </div>
          </ProductCard>
        );
      })}
    </div>
  );
};

export default RecommendedProducts;
