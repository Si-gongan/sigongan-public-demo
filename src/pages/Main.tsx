import { useRecoilState } from 'recoil';
import Main from '../components/Main/Main';
import ResponsiveContainer from '../components/UI/Layout/ResponsiveContainer';
import Modal from '../components/UI/Modal/Modal';
import modalState from '../recoil/modal';
import AppDownloader from '../components/AppDownloader/AppDownloader';

const MainPage: React.FC = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <ResponsiveContainer>
      {/* APP MODAL TEST */}
      <button onClick={openModal}>open modal</button>
      {isOpen && (
        <Modal>
          <AppDownloader />
        </Modal>
      )}
      <Main />
    </ResponsiveContainer>
  );
};

export default MainPage;
