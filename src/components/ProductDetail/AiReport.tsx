/** @jsxImportSource @emotion/react */
import { HashLoader } from 'react-spinners';
import { FaCircleInfo, FaRegFaceSurprise } from 'react-icons/fa6';
import * as styles from './AiReport.styles';
import { ApiSate } from '../../types/api';

interface Props {
  state: ApiSate;
  answer?: string;
}

const AiReport: React.FC<Props> = (props) => {
  const { state, answer } = props;

  switch (state) {
    case 'pending':
      return (
        <div css={styles.reportContent}>
          <div css={styles.descriptionContainer}>
            <FaCircleInfo size={20} color="#bbb" />
            <p css={styles.description}>
              <strong>AI 리포트 생성</strong> 버튼을 눌러보세요
            </p>
          </div>
        </div>
      );
    case 'loading':
      return (
        <div css={styles.reportContent}>
          <div css={styles.descriptionContainer}>
            <HashLoader color="#333" loading size={24} />
            <div css={styles.description}>AI 리포트를 생성하고 있어요</div>
          </div>
        </div>
      );
    case 'error':
      return (
        <div css={styles.reportContent}>
          <div css={styles.descriptionContainer}>
            <FaRegFaceSurprise size={20} color="#bbb" />
            <p css={styles.description}>AI 생성 오류가 발생했어요</p>
          </div>
        </div>
      );
    case 'done':
      return (
        <div css={styles.reportContent}>
          <p css={styles.answer}>{answer}</p>
        </div>
      );
    default:
      return (
        <div css={styles.reportContent}>
          <div css={styles.descriptionContainer}>
            <FaCircleInfo size={20} color="#bbb" />
            <p css={styles.description}>
              <strong>AI 리포트 생성</strong> 버튼을 눌러보세요
            </p>
          </div>
        </div>
      );
  }
};

export default AiReport;
