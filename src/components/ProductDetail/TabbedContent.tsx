/** @jsxImportSource @emotion/react */
import * as styles from './TabbedContent.styles';
import ContentCard from '../UI/Card/ContentCard';
import AIReport from './AIReport';
import { ApiSate } from '../../types/api';
import { useStream } from '../../hooks/useStream';
import { useState } from 'react';
import PriceHistory from './PriceHistory/PriceHistory';
import { DetailTabType, History } from '../../types/product';
import { getCaption, getReport } from '../../api/fetch/ai/api';

interface Props {
  id: string;
  histories: History[];
  tabType: DetailTabType;
  clickReport: () => void;
  clickCaption: () => void;
  clickPriceHistory: () => void;
}

const TabbedContent: React.FC<Props> = (props) => {
  const {
    id,
    histories,
    tabType,
    clickReport,
    clickCaption,
    clickPriceHistory,
  } = props;
  const [reportReply, setReportReply] = useState('');
  const [captionReply, setCaptionReply] = useState('');

  const {
    isLoading: reportLoading,
    error: reportError,
    getAnswer: getReportAnswer,
  } = useStream({ id }, getReport, setReportReply);
  const {
    isLoading: captionLoading,
    error: captionError,
    getAnswer: getCaptionAnswer,
  } = useStream({ id }, getCaption, setCaptionReply);

  let reportState: ApiSate = 'pending';
  if (reportLoading) {
    reportState = 'loading';
  } else if (reportError) {
    reportState = 'error';
  } else if (reportReply) {
    reportState = 'done';
  }

  let captionState: ApiSate = 'pending';
  if (captionLoading) {
    captionState = 'loading';
  } else if (captionError) {
    captionState = 'error';
  } else if (captionReply) {
    captionState = 'done';
  }

  const createReportHandler = async () => {
    clickReport();
    getReportAnswer();
  };

  const createCaptionHandler = async () => {
    clickCaption();
    getCaptionAnswer();
  };

  const clickPriceHistoryHandler = () => {
    clickPriceHistory();
  };

  return (
    <div>
      {/* Switchers */}
      <div css={styles.switchers}>
        <button
          css={styles.button(tabType === 'report')}
          onClick={createReportHandler}
        >
          AI 리포트 생성
        </button>
        <button
          css={styles.button(tabType === 'caption')}
          onClick={createCaptionHandler}
        >
          이미지 분석
        </button>
        <button
          css={styles.button(tabType === 'priceHistory')}
          onClick={clickPriceHistoryHandler}
        >
          가격 추적
        </button>
      </div>
      {/* Content */}
      <section css={styles.contentContainer}>
        <ContentCard>
          {tabType === 'report' && (
            <AIReport state={reportState} answer={reportReply} />
          )}
          {tabType === 'caption' && (
            <AIReport state={captionState} answer={captionReply} />
          )}
          {tabType === 'priceHistory' && <PriceHistory histories={histories} />}
        </ContentCard>
      </section>
    </div>
  );
};

export default TabbedContent;
