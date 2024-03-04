/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import { BestProduct } from '../../../api/axios/ai/types';
import * as styles from './BestProducts.styles';

interface ItemProps {
  product: BestProduct;
}

const Item: React.FC<ItemProps> = ({ product }) => {
  const price = `${product.productPrice.toLocaleString()}원`;

  return (
    <div css={styles.card}>
      <Link to={`/detail/m${product.productId}`} css={styles.link}>
        <div css={styles.product}>
          <div css={styles.imageWrapper}>
            <img css={styles.image} src={product.productImage} alt="" />
          </div>
          <div>
            <div css={styles.contentTitle}>
              <h3 css={styles.name} role="presentation">
                {product.productName}
              </h3>
            </div>
            <div css={styles.contentPrice}>
              <div css={styles.priceWrapper}>{price}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
