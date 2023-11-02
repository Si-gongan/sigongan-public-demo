/** @jsxImportSource @emotion/react */
import { responsiveCard } from './ProductCard.styles';

interface Props {
  children: React.ReactNode;
  isLoading?: boolean;
}

const ProductCard: React.FC<Props> = (props) => {
  return <div css={responsiveCard(props.isLoading)}>{props.children}</div>;
};

export default ProductCard;
