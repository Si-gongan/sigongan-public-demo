import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

interface Props {
  children: React.ReactNode;
}

const portalElement = document.getElementById('overlays');

const Modal = ({ children }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement!)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement!
      )}
    </>
  );
};

export default Modal;
