/** @jsxImportSource @emotion/react */
import * as styles from './TabbedContent.styles';
import ContentCard from '../UI/Card/ContentCard';
import { useStream } from '../../hooks/useStream';
import PriceHistory from './PriceHistory/PriceHistory';
import { DetailTabType, History } from '../../types/product';
import { getCaption, getReport } from '../../api/fetch/ai/api';
import Instruction from './AISection/Instruction';
import Answer from './AISection/Answer';

interface Props {
  id: string;
  histories: History[];
  tabType: DetailTabType;
  changeTab: (tab: DetailTabType) => void;
}

const TabbedContent: React.FC<Props> = (props) => {
  const { id, histories, tabType, changeTab } = props;

  const report = useStream({ id }, getReport);
  const caption = useStream({ id }, getCaption);

  const createReportHandler = async () => {
    changeTab('report');
    if (!report.answer) {
      report.getAnswer();
    }
  };

  const createCaptionHandler = async () => {
    changeTab('caption');
    if (!caption.answer) {
      caption.getAnswer();
    }
  };

  const clickPriceHistoryHandler = () => {
    changeTab('priceHistory');
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
          {!tabType && <Instruction />}
          {tabType === 'report' && (
            <Answer state={report.state} answer={report.answer} />
          )}
          {tabType === 'caption' && (
            <Answer state={caption.state} answer={caption.answer} />
          )}
          {tabType === 'priceHistory' && <PriceHistory histories={histories} />}
        </ContentCard>
      </section>
    </div>
  );
};

export default TabbedContent;
