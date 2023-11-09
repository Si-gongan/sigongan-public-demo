/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import * as styles from './ProductInfoSkeleton.styles';

const ProductInfoSkeleton: React.FC = () => {
  const theme = useTheme();
  return (
    <div css={styles.container}>
      <div css={styles.imgWrapper}>
        <span css={styles.img} />
      </div>
      <div css={styles.contentContainer}>
        <div css={styles.mainInfoContainer(theme)}>
          <div css={styles.detailTitle} />
          <div css={styles.detailPrice} />
        </div>
        <div css={styles.metaContainer}>
          <div css={styles.subTitle} />
          <div css={styles.info} />
          <div css={styles.info} />
          <div css={styles.info} />
        </div>
        <div css={styles.actions}>
          <div css={styles.button} />
          <div css={styles.button} />
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSkeleton;
