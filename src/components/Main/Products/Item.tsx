/** @jsxImportSource @emotion/react */
import { BestProduct } from '../../../api/axios/ai/types';
import * as styles from './BestProducts.styles';

interface ItemProps {
  product: BestProduct;
}

const Item: React.FC<ItemProps> = ({ product }) => {
  return (
    <div css={styles.card}>
      <a
        href={product.productUrl}
        target="_blank"
        rel="noopener noreferrer"
        css={styles.link}
        aria-label={`구매 링크. 상품명: ${product.productName}, 가격: ${product.productPrice}`}
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
              <div css={styles.priceWrapper}>
                {`${product.productPrice.toLocaleString()}원`}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Item;
