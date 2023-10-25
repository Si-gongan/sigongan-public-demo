/** @jsxImportSource @emotion/react */
import Card from '../UI/Card';
import { content, priceWrapper, thumbnail, title } from './Product.styles';
import { ProductModel } from '../../types/product';
import { truncateText } from '../../utils';
import { Link } from 'react-router-dom';

interface PropsType {
  product: ProductModel;
}

const Product: React.FC<PropsType> = (props) => {
  const { product } = props;
  const price = `${product.price.toLocaleString()}원`;
  const truncatedText = `${truncateText(product.title, 60)}`;

  return (
    <li>
      <Link to={`/detail/${product.id}`}>
        <Card width="100%" height="320px" maxWidth="200px">
          <img css={thumbnail} src={product.image} alt={truncatedText} />
          <div css={content}>
            <h2 css={title}>{truncatedText}</h2>
            <span css={priceWrapper}>{price}</span>
          </div>
        </Card>
      </Link>
    </li>
  );
};

export default Product;
