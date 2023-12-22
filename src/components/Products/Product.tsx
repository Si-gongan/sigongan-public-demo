/** @jsxImportSource @emotion/react */
import * as styles from './Product.styles';
import { ProductModel } from '../../types/product';
import { truncateText } from '../../utils';
import { Link } from 'react-router-dom';
import ProductCard from '../UI/Card/ProductCard';

interface PropsType {
  product: ProductModel;
}

const Product: React.FC<PropsType> = (props) => {
  const { product } = props;
  const price = `${Number(product.price).toLocaleString()}원`;
  const truncatedText = `${truncateText(product.name, 32)}`;

  return (
    <ProductCard>
      <Link to={`/detail/${product.id}`}>
        <div css={styles.imageWrapper}>
          <img css={styles.image} src={product.thumbnail} alt={truncatedText} />
        </div>
        <div css={styles.contentTitle}>
          <h2 css={styles.title}>{truncatedText}</h2>
        </div>
        <div css={styles.contentPrice}>
          <div css={styles.priceWrapper}>{price}</div>
        </div>
      </Link>
    </ProductCard>
  );
};

export default Product;
