/** @jsxImportSource @emotion/react */
import { responsiveCard } from './ProductCard.styles';

interface Props {
  children: React.ReactNode;
}

const ProductCard: React.FC<Props> = (props) => {
  return <div css={responsiveCard}>{props.children}</div>;
};

export default ProductCard;
