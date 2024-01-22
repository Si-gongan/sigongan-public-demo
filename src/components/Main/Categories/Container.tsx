/** @jsxImportSource @emotion/react */
import { container, categories } from './Categories.styles';

interface Props {
  isOpen?: boolean;
  children: React.ReactNode;
}

function Container({ children, isOpen = true }: Props) {
  return (
    <div css={container(isOpen)}>
      <div css={categories}>{children}</div>
    </div>
  );
}

export default Container;
