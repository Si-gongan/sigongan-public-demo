/** @jsxImportSource @emotion/react */
import { AIProduct } from '../../types/chat';
import { truncateText } from '../../utils';
import * as styles from './RecommendedProduct.styles';

interface Props {
  product: AIProduct;
}

const RecommendedProduct: React.FC<Props> = (props) => {
  const { product } = props;
  const title = truncateText(product.name, 40);
  const price = `${product.price.toLocaleString()}원`;

  return (
    <div css={styles.card}>
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        css={styles.link}
      >
        <div css={styles.container}>
          <div css={styles.imageWrapper}>
            <img
              css={styles.image}
              src={product.thumbnail}
              alt={product.name}
            />
          </div>
          <div css={styles.infoContainer}>
            <div css={styles.contentTitle}>
              <h2 css={styles.title}>{title}</h2>
            </div>
            <div css={styles.contentPrice}>
              <div css={styles.priceWrapper}>{price}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default RecommendedProduct;
