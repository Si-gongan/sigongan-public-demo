/** @jsxImportSource @emotion/react */
import { BestProduct } from '../../../api/axios/ai/types';
import * as styles from './BestProducts.styles';

interface ItemProps {
  product: BestProduct;
}

const Item: React.FC<ItemProps> = ({ product }) => {
  const price = `${product.productPrice.toLocaleString()}원`;

  return (
    <div css={styles.card}>
      <a
        href={product.productUrl}
        target="_blank"
        rel="noopener noreferrer"
        css={styles.link}
      >
        <div css={styles.product}>
          <div css={styles.imageWrapper}>
            <img
              css={styles.image}
              src={product.productImage}
              alt="상품 이미지"
            />
          </div>
          <div>
            <div css={styles.contentTitle}>
              <h3 css={styles.name}>{product.productName}</h3>
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

export default Item;
