/** @jsxImportSource @emotion/react */
import * as styles from './TabbedContent.styles';
import ContentCard from '../UI/Card/ContentCard';
import AIReport from './AIReport';
import { ApiSate } from '../../types/api';
import { useStream } from '../../hooks/useStream';
import { useState } from 'react';
import PriceHistory from './PriceHistory/PriceHistory';
import { DetailTabType, History } from '../../types/product';
import { useTheme } from '@emotion/react';

interface Props {
  id: string;
  histories: History[];
  tabType: DetailTabType;
  clickReport: () => void;
  clickPriceHistory: () => void;
}

const TabbedContent: React.FC<Props> = (props) => {
  const theme = useTheme();
  const { id, histories, tabType, clickReport, clickPriceHistory } = props;
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
      {/* Switchers */}
      <div css={styles.switchers(theme)}>
        <button css={styles.button} onClick={() => createReportHandler()}>
          AI 리포트 생성
        </button>
        <button css={styles.button}>AI 상담</button>
        <button css={styles.button} onClick={clickPriceHistoryHandler}>
          가격 추적
        </button>
      </div>
      {/* Content */}
      <section css={styles.contentContainer}>
        <ContentCard>
          {tabType === 'report' && <AIReport state={state} answer={reply} />}
          {tabType === 'priceHistory' && <PriceHistory histories={histories} />}
        </ContentCard>
      </section>
    </div>
  );
};

export default TabbedContent;
