/** @jsxImportSource @emotion/react */
import { modal } from './Modal.styles';

interface Props {
  children: React.ReactNode;
}

const ModalOverlay = ({ children }: Props) => {
  return <div css={modal}>{children}</div>;
};

export default ModalOverlay;
