/** @jsxImportSource @emotion/react */
import { useRecoilValue } from 'recoil';
import { APP_URL } from '../../utils';
import * as styles from './Banner.styles';
import { bannerRepo } from '../../recoil/banner';

function AppBanner() {
  const { closeBanner } = useRecoilValue(bannerRepo);
  return (
    <div css={styles.container}>
      <div css={styles.description}>
        <button css={styles.closeBtn} onClick={closeBanner} aria-label="닫기">
          ×
        </button>
        <p>앱 설치하고 더 다양한 기능 사용하기</p>
      </div>
      <div css={styles.actions}>
        <a href={APP_URL} target="_blank" rel="noopener noreferrer">
          앱으로 보기
        </a>
      </div>
    </div>
  );
}

export default AppBanner;
