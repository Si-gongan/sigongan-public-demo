/** @jsxImportSource @emotion/react */
import { title } from './BestProducts.styles';

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h2 css={title}>{children}</h2>;
};

export default Title;
