/** @jsxImportSource @emotion/react */
import * as styles from './Popup.styles';
import logoImage from '../../assets/logo/pickforme-logo.png';
import { useRecoilValue } from 'recoil';
import { modalRepo } from '../../recoil/modal';
import appUrlState from '../../recoil/app-url';
import { useRef } from 'react';
import useTrapFocus from '../../hooks/useTrapFocus';

const AppPopup = () => {
  const popupRef = useRef<HTMLDivElement>(null);
  const { closeModal } = useRecoilValue(modalRepo);
  const appUrl = useRecoilValue(appUrlState);

  useTrapFocus(popupRef, closeModal);

  return (
    <div
      css={styles.container}
      tabIndex={-1}
      ref={popupRef}
      role="dialog"
      aria-modal="true"
    >
      <div css={styles.logo}>
        <img src={logoImage} alt="로고" />
      </div>
      <div css={styles.content}>
        <h2
          css={styles.title}
          role="heading"
          aria-label="픽포미 앱 2.0 버전 출시"
        >
          픽포미 앱 v2.0 출시
        </h2>
        <p css={styles.text}>
          새로워진 픽포미 앱, 이제 앱으로 더 편하게 쇼핑해 보세요!
        </p>
      </div>
      <div css={styles.actions}>
        <a
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          role="button"
        >
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
