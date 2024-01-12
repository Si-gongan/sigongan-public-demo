/** @jsxImportSource @emotion/react */
import { useSetRecoilState } from 'recoil';
import modalState from '../../../recoil/modal';
import { backdrop } from './Modal.styles';

const Backdrop = () => {
  const setIsOpen = useSetRecoilState(modalState);

  const closeModal = () => {
    setIsOpen(false);
  };

  return <div css={backdrop} onClick={closeModal} />;
};

export default Backdrop;
