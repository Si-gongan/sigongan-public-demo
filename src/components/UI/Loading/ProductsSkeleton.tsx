/** @jsxImportSource @emotion/react */
import ProductCard from '../Card/ProductCard';
import * as styles from './ProductsSkeleton.styles';

const ProductsSkeleton: React.FC = () => {
  return (
    <ProductCard isLoading>
      <span>
        <div css={styles.imageWrapper}>
          <div css={styles.image} />
        </div>
        <div css={styles.contentTitle}>
          <div css={styles.title} />
          <div css={styles.title} />
        </div>
        <div css={styles.contentPrice}>
          <div css={styles.priceWrapper}> </div>
        </div>
      </span>
    </ProductCard>
  );
};

export default ProductsSkeleton;
