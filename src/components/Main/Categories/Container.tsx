/** @jsxImportSource @emotion/react */
import { container, categories } from './Categories.styles';

interface Props {
  isOpen?: boolean;
  children: React.ReactNode;
}

function Container({ children, isOpen = true }: Props) {
  return (
    <div css={container(isOpen)}>
      <div css={categories} role="region" aria-labelledby="main-category-list">
        {children}
      </div>
    </div>
  );
}

export default Container;
