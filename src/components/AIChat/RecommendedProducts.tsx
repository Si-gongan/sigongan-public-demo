/** @jsxImportSource @emotion/react */
import { AssistantProduct } from '../../types/chat';
import ChatProduct from './Product';
import * as styles from './RecommendedProducts.styles';

interface Props {
  products: AssistantProduct[];
}

const RecommendedProducts: React.FC<Props> = (props) => {
  const { products } = props;
  return (
    <div css={styles.cardArea}>
      {products.map((product, index) => (
        <ChatProduct product={product} key={index} />
      ))}
    </div>
  );
};

export default RecommendedProducts;
