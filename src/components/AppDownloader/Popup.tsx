/** @jsxImportSource @emotion/react */
import * as styles from './Popup.styles';
import logoImage from '../../assets/logo/pickforme-logo.png';
import { useRecoilValue } from 'recoil';
import { modalRepo } from '../../recoil/modal';
import { APP_URL } from '../../utils';

const AppPopup = () => {
  const { closeModal } = useRecoilValue(modalRepo);

  return (
    <div css={styles.container}>
      <div css={styles.logo}>
        <img src={logoImage} alt="로고" />
      </div>
      <div css={styles.content}>
        <h2 css={styles.title}>픽포미 앱 v2.0 출시</h2>
        <p css={styles.text}>
          지금 앱을 다운 받고 더 많은 기능을 사용해 보세요!
        </p>
      </div>
      <div css={styles.actions}>
        <a href={APP_URL} target="_blank" rel="noopener noreferrer">
          앱 다운받기
        </a>
      </div>
      <button
        css={styles.underlineBtn}
        onClick={closeModal}
        aria-label="웹으로 볼게요"
      >
        웹으로 볼게요
      </button>
    </div>
  );
};

export default AppPopup;