/** @jsxImportSource @emotion/react */
import * as styles from './Report.styles';
import ReportCard from '../UI/Card/ReportCard';
import ReportContent from './ReportContent';
import { ApiSate } from '../../types/api';
import { useStream } from '../../hooks/useStream';
import { useState } from 'react';

interface Props {
  id: string;
}

const Report: React.FC<Props> = (props) => {
  const { id } = props;
  const [reply, setReply] = useState('');
  const { isLoading, error, getAnswer } = useStream({ id }, setReply);

  let state: ApiSate = 'pending';
  if (isLoading) {
    state = 'loading';
  } else if (error) {
    state = 'error';
  } else if (reply) {
    state = 'done';
  }

  const createReportHandler = async () => {
    getAnswer();
  };

  return (
    <div>
      <div css={styles.reportActions}>
        <button css={styles.reportButton} onClick={() => createReportHandler()}>
          AI 리포트 생성
        </button>
        <button css={styles.reportButton}>AI 상담</button>
      </div>
      <section css={styles.reportContainer}>
        <ReportCard>
          <ReportContent state={state} answer={reply} />
        </ReportCard>
      </section>
    </div>
  );
};

export default Report;
