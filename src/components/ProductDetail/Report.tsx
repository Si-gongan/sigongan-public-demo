/** @jsxImportSource @emotion/react */
import * as styles from './Report.styles';
import ReportCard from '../UI/Card/ReportCard';
import ReportContent from './ReportContent';
import { ApiSate } from '../../types/api';
import { useStream } from '../../hooks/useStream';
import { useState } from 'react';
import PriceHistory from './PriceHistory';
import { DetailContentType, History } from '../../types/product';

interface Props {
  id: string;
  histories: History[];
  contentType: DetailContentType;
  clickReport: () => void;
  clickPriceHistory: () => void;
}

const Report: React.FC<Props> = (props) => {
  const { id, histories, contentType, clickReport, clickPriceHistory } = props;
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
    clickReport();
    getAnswer();
  };

  const clickPriceHistoryHandler = () => {
    clickPriceHistory();
  };

  return (
    <div>
      <div css={styles.reportActions}>
        <button css={styles.reportButton} onClick={() => createReportHandler()}>
          AI 리포트 생성
        </button>
        <button css={styles.reportButton}>AI 상담</button>
        <button css={styles.reportButton} onClick={clickPriceHistoryHandler}>
          가격 추적
        </button>
      </div>
      <section css={styles.reportContainer}>
        <ReportCard>
          {contentType === 'report' && (
            <ReportContent state={state} answer={reply} />
          )}
          {contentType === 'priceHistory' && (
            <PriceHistory histories={histories} />
          )}
        </ReportCard>
      </section>
    </div>
  );
};

export default Report;
