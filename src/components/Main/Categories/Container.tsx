/** @jsxImportSource @emotion/react */
import { container, categories } from './Categories.styles';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div css={container}>
      <div css={categories}>{children}</div>
    </div>
  );
};

export default Container;
