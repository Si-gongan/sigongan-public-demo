/** @jsxImportSource @emotion/react */
import { center, productsArea } from './BestProducts.styles';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div css={center}>
      <div css={productsArea}>{children}</div>
    </div>
  );
};

export default Container;
