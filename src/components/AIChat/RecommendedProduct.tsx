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
  const shortTitle = truncateText(product.name, 20);
  const price = `${product.price.toLocaleString()}원`;

  return (
    <div css={styles.card}>
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        css={styles.link}
        aria-label={`상품명: ${shortTitle}, 가격: ${price}`}
      >
        <div css={styles.container}>
          <div css={styles.imageWrapper}>
            <img css={styles.image} src={product.thumbnail} alt="" />
          </div>
          <div css={styles.infoContainer}>
            <div css={styles.contentTitle}>
              <p css={styles.title}>{title}</p>
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
