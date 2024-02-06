/** @jsxImportSource @emotion/react */
import { AIProduct } from '../../types/chat';
import RecommendedProduct from './RecommendedProduct';
import * as styles from './RecommendedProducts.styles';

interface Props {
  products: AIProduct[];
}

const RecommendedProducts: React.FC<Props> = (props) => {
  const { products } = props;
  return (
    <div css={styles.cardArea} role="group" aria-label="추천 상품 링크">
      {products.map((product, index) => (
        <RecommendedProduct product={product} key={index} />
      ))}
    </div>
  );
};

export default RecommendedProducts;
