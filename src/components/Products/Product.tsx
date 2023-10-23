/** @jsxImportSource @emotion/react */
import Card from '../UI/Card';
import { content, priceWrapper, thumbnail, title } from './Product.styles';
import { ProductModel } from '../../types/product';

interface PropsType {
  product: ProductModel;
}

const Product: React.FC<PropsType> = (props) => {
  const { product } = props;
  const price = `${product.price.toLocaleString()}원`;

  return (
    <Card width="100%" height="320px">
      <img css={thumbnail} src={product.image} alt={product.title} />
      <div css={content}>
        <h2 css={title}>{product.title}</h2>
        <span css={priceWrapper}>{price}</span>
      </div>
    </Card>
  );
};

export default Product;
