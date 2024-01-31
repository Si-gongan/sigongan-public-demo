/** @jsxImportSource @emotion/react */
import { useRecoilValue } from 'recoil';
import * as styles from './Content.styles';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import appUrlState from '../../recoil/app-url';

interface Props {
  clickManual: () => void;
}

const ContentNav: React.FC<Props> = (props) => {
  const appUrl = useRecoilValue(appUrlState);

  return (
    <div css={styles.container}>
      <button css={styles.navBtn} onClick={props.clickManual}>
        도움말
      </button>
      <div css={styles.navBtn}>
        <a
          css={styles.link}
          href="http://pf.kakao.com/_csbDxj"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
        >
          피드백 보내기
          <FaArrowUpRightFromSquare size={12} />
        </a>
      </div>
      <div css={styles.navBtn}>
        <a
          css={styles.link}
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="앱 다운로드"
          role="button"
        >
          앱 다운로드
          <FaArrowUpRightFromSquare size={12} />
        </a>
      </div>
      {/* 외부 링크 연결 파트 */}
      <div css={styles.bottomArea}>
        <span css={styles.externalLink}>
          <a
            href="https://sigongan.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            홈페이지
          </a>
        </span>
        <span css={styles.externalLink}>
          <a href="mailto:sigongan22@gmail.com">이메일</a>
        </span>
        <span css={styles.externalLink}>
          <a
            href="https://www.instagram.com/sigongan.official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            인스타그램
          </a>
        </span>
      </div>
    </div>
  );
};

export default ContentNav;
