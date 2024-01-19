/** @jsxImportSource @emotion/react */
import { useRecoilValue } from 'recoil';
import { modalRepo } from '../../../recoil/modal';
import { backdrop } from './Modal.styles';

const Backdrop = () => {
  const { closeModal } = useRecoilValue(modalRepo);

  return <div css={backdrop} onClick={closeModal} />;
};

export default Backdrop;
