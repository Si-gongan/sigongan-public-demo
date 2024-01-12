/** @jsxImportSource @emotion/react */
import {
  container,
  content,
  title,
  actions,
  underlineBtn,
} from './AppDownloader.styles';
import logo from '../../assets/logo/pickforme-logo.png';
import { useSetRecoilState } from 'recoil';
import modalState from '../../recoil/modal';

const AppDownloader = () => {
  const setIsModalOpen = useSetRecoilState(modalState);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div css={container}>
      <div css={title}>
        <img src={logo} alt="로고" />
      </div>
      <div css={content}>
        <h2>픽포미 앱 v2.0 출시</h2>
        <p>지금 앱을 다운 받고 더 많은 기능을 사용해 보세요!</p>
      </div>
      <div css={actions}>
        <a href="" target="_blank" rel="noopener noreferrer">
          앱 다운받기
        </a>
      </div>
      <button css={underlineBtn} onClick={closeModal}>
        불편하지만 웹으로 볼게요
      </button>
    </div>
  );
};

export default AppDownloader;
