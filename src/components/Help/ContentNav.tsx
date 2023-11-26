/** @jsxImportSource @emotion/react */
import * as styles from './Content.styles';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface Props {
  clickManual: () => void;
}

const ContentNav: React.FC<Props> = (props) => {
  return (
    <div css={styles.container}>
      <div css={styles.navBtn} onClick={props.clickManual}>
        도움말
      </div>
      <div css={styles.navBtn}>
        <a
          css={styles.link}
          href="http://pf.kakao.com/_csbDxj"
          target="_blank"
          rel="noopener noreferrer"
        >
          피드백 보내기
          <FaArrowUpRightFromSquare size={12} />
        </a>
      </div>
      {/* TODO: 시공간 페이지, 앱스토어 등 외부 링크 연결 파트 */}
    </div>
  );
};

export default ContentNav;
