/** @jsxImportSource @emotion/react */
import * as styles from './TabbedContent.styles';
import ContentCard from '../UI/Card/ContentCard';
import { useStream } from '../../hooks/useStream';
import PriceHistory from './PriceHistory/PriceHistory';
import { DetailTabType, History } from '../../types/product';
import {
  getCaption,
  getPriceDescription,
  getReport,
} from '../../api/fetch/ai/api';
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
  const priceDescription = useStream({ id }, getPriceDescription);

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

  const createPriceDescription = async () => {
    changeTab('priceHistory');
    if (!priceDescription.answer) {
      priceDescription.getAnswer();
    }
  };

  return (
    <div>
      {/* Switchers */}
      <div css={styles.switchers}>
        <button
          css={styles.button(tabType === 'report')}
          onClick={createReportHandler}
          aria-label="AI 리포트 생성"
        >
          AI 리포트 생성
        </button>
        <button
          css={styles.button(tabType === 'caption')}
          onClick={createCaptionHandler}
          aria-label="이미지 분석"
        >
          이미지 분석
        </button>
        <button
          css={styles.button(tabType === 'priceHistory')}
          onClick={createPriceDescription}
          aria-label="가격 추적"
        >
          가격 추적
        </button>
      </div>
      {/* Content */}
      <section css={styles.contentContainer}>
        <ContentCard>
          {!tabType && <Instruction />}
          {tabType === 'report' && (
            <Answer
              state={report.state}
              answer={report.answer}
              answerRef={report.answerRef}
            />
          )}
          {tabType === 'caption' && (
            <Answer
              state={caption.state}
              answer={caption.answer}
              answerRef={caption.answerRef}
            />
          )}
          {tabType === 'priceHistory' && (
            <PriceHistory
              histories={histories}
              state={priceDescription.state}
              answer={priceDescription.answer}
              answerRef={priceDescription.answerRef}
            />
          )}
        </ContentCard>
      </section>
    </div>
  );
};

export default TabbedContent;
