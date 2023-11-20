/** @jsxImportSource @emotion/react */
import { responsiveCard } from './ProductCard.styles';

interface Props {
  children: React.ReactNode;
}

const ProductCard: React.FC<Props> = (props) => {
  return <li css={responsiveCard}>{props.children}</li>;
};

export default ProductCard;
