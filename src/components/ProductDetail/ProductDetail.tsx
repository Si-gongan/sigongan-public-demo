/** @jsxImportSource @emotion/react */
import ProductInfo from './ProductInfo';
import Report from './Report';
import * as styles from './ProductDetail.styles';

const ProductDetail: React.FC = () => {
  return (
    <div css={styles.container}>
      <ProductInfo />
      <Report />
    </div>
  );
};

export default ProductDetail;
