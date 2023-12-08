/** @jsxImportSource @emotion/react */
import { useQuery } from '@tanstack/react-query';
import * as styles from './TabbedContent.styles';
import { StreamType, useStream } from '../../hooks/useStream';
import { DetailTabType, History } from '../../types/product';
import Instruction from './AISection/Instruction';
import Answer from './AISection/Answer';
import ReviewContent from './AISection/Review';
import PriceChart from './PriceChart/PriceChart';
import { getReview } from '../../api/axios/ai/api';
import {
  getCaption,
  getPriceDescription,
  getReport,
} from '../../api/fetch/ai/api';

interface Props {
  id: string;
  group: string;
  histories: History[];
  tabType: DetailTabType;
  changeTab: (tab: DetailTabType) => void;
}

type Streams = Record<string, StreamType>;

const TabbedContent: React.FC<Props> = (props) => {
  const { id, group, histories, tabType, changeTab } = props;

  const { isLoading: reviewLoading, refetch } = useQuery({
    queryKey: ['review', { id }],
    queryFn: () => getReview({ group }),
    enabled: false,
    staleTime: 300000,
  });

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
    !streams.report.isDone ||
    !streams.caption.isDone ||
    !streams.price.isDone ||
    reviewLoading;

  const startAnswerHandler = async (type: DetailTabType) => {
    changeTab(type);
    if (type && !streams[type].answer) {
      streams[type].startAnswer();
    }
  };

  const clickReviewHadler = () => {
    changeTab('review');
    refetch();
  };

  const buttons = [
    {
      id: 1,
      tabType: 'report',
      text: 'AI 리포트 생성',
      clickHandler: () => startAnswerHandler('report'),
    },
    {
      id: 2,
      tabType: 'caption',
      text: '이미지 분석',
      clickHandler: () => startAnswerHandler('caption'),
    },
    {
      id: 3,
      tabType: 'price',
      text: '가격 추적',
      clickHandler: () => startAnswerHandler('price'),
    },
    {
      id: 4,
      tabType: 'review',
      text: '리뷰 분석',
      clickHandler: clickReviewHadler,
    },
  ];

  return (
    <div>
      {/* Switchers */}
      <div css={styles.switchers}>
        {buttons.map((button) => (
          <button
            key={button.id}
            css={styles.button(tabType === button.tabType, disabled)}
            onClick={button.clickHandler}
            aria-label={button.text}
            disabled={disabled}
          >
            {button.text}
          </button>
        ))}
      </div>
      {/* Content */}
      <section css={styles.contentContainer}>
        {!tabType ? (
          <Instruction />
        ) : tabType === 'review' ? (
          <ReviewContent id={id} />
        ) : (
          <Answer {...streams[tabType]} {...optionalProps[tabType]} />
        )}
      </section>
    </div>
  );
};

export default TabbedContent;
