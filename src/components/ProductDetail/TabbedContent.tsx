/** @jsxImportSource @emotion/react */
import * as styles from './TabbedContent.styles';
import { StreamType, useStream } from '../../hooks/useStream';
import { DetailTabType, History } from '../../types/product';
import {
  getCaption,
  getPriceDescription,
  getReport,
} from '../../api/fetch/ai/api';
import Instruction from './AISection/Instruction';
import Answer from './AISection/Answer';
import PriceChart from './PriceChart/PriceChart';

interface Props {
  id: string;
  histories: History[];
  tabType: DetailTabType;
  changeTab: (tab: DetailTabType) => void;
}

type Streams = Record<string, StreamType>;

const TabbedContent: React.FC<Props> = (props) => {
  const { id, histories, tabType, changeTab } = props;

  const streams: Streams = {
    report: useStream({ id }, getReport),
    caption: useStream({ id }, getCaption),
    price: useStream({ id }, getPriceDescription),
  };

  const optionalProps = {
    report: {},
    caption: {},
    price: {
      loadingMessage: '상품 가격을 분석하고 있어요',
      errorMessage: '가격 분석에 실패했어요',
      chart: <PriceChart histories={histories} />,
    },
  };

  const disabled =
    !streams.report.isDone || !streams.caption.isDone || !streams.price.isDone;

  const startAnswerHandler = async (type: DetailTabType) => {
    changeTab(type);
    if (type && !streams[type].answer) {
      streams[type].startAnswer();
    }
  };

  return (
    <div>
      {/* Switchers */}
      <div css={styles.switchers}>
        <button
          css={styles.button(tabType === 'report', disabled)}
          onClick={() => startAnswerHandler('report')}
          aria-label="AI 리포트 생성"
          disabled={disabled}
        >
          AI 리포트 생성
        </button>
        <button
          css={styles.button(tabType === 'caption', disabled)}
          onClick={() => startAnswerHandler('caption')}
          aria-label="이미지 분석"
          disabled={disabled}
        >
          이미지 분석
        </button>
        <button
          css={styles.button(tabType === 'price', disabled)}
          onClick={() => startAnswerHandler('price')}
          aria-label="가격 추적"
          disabled={disabled}
        >
          가격 추적
        </button>
      </div>
      {/* Content */}
      <section css={styles.contentContainer}>
        {!tabType ? (
          <Instruction />
        ) : (
          <Answer
            state={streams[tabType].state}
            answer={streams[tabType].answer}
            answerRef={streams[tabType].answerRef}
            isDone={streams[tabType].isDone}
            startAnswer={streams[tabType].startAnswer}
            stopAnswer={streams[tabType].stopAnswer}
            {...optionalProps[tabType]}
          />
        )}
      </section>
    </div>
  );
};

export default TabbedContent;
