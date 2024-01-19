import { useRecoilValue } from 'recoil';
import Main from '../components/Main/Main';
import ResponsiveContainer from '../components/UI/Layout/ResponsiveContainer';
import Modal from '../components/UI/Modal/Modal';
import modalState from '../recoil/modal';
import AppPopup from '../components/AppDownloader/Popup';

const MainPage: React.FC = () => {
  const isOpen = useRecoilValue(modalState);

  return (
    <ResponsiveContainer>
      {isOpen && (
        <Modal>
          <AppPopup />
        </Modal>
      )}
      <Main />
    </ResponsiveContainer>
  );
};

export default MainPage;
