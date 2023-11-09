/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { responsiveCard } from './ProductCard.styles';

interface Props {
  children: React.ReactNode;
  isLoading?: boolean;
}

const ProductCard: React.FC<Props> = (props) => {
  const theme = useTheme();
  return (
    <div css={responsiveCard(props.isLoading, theme)}>{props.children}</div>
  );
};

export default ProductCard;
