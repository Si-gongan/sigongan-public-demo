/** @jsxImportSource @emotion/react */
import { useQuery } from '@tanstack/react-query';
import { DetailTabType, MainProductTab, ProductTab } from '../../types/product';
import Instruction from './AISection/Instruction';
import Answer from './AISection/Answer';
import ReviewContent from './AISection/Review';
import { getReview } from '../../api/axios/ai/api';
import useTab from '../../hooks/useTab';
import { getTabButtons } from '../../utils';
import * as styles from './TabbedContent.styles';

interface MainProductProps {
  productType: 'main';
  tabType: DetailTabType;
  changeTab: (tab: DetailTabType) => void;
  tabProps: MainProductTab; // id, url
}

interface SearchProductProps {
  productType: 'search';
  tabType: DetailTabType;
  changeTab: (tab: DetailTabType) => void;
  tabProps: ProductTab; // id, group, histories
}

type Props = MainProductProps | SearchProductProps;

export default function TabbedContent({
  productType,
  tabType,
  changeTab,
  tabProps,
}: Props) {
  const { id } = tabProps;
  const { queryParam, streams, disabledStreams, answerProps } = useTab(
    productType === 'main'
      ? { productType, tabProps }
      : { productType, tabProps }
  );

  const { isLoading: reviewLoading, refetch } = useQuery({
    queryKey: ['review', { id }],
    queryFn: () => getReview(queryParam),
    enabled: false,
    staleTime: 300000,
  });

  const disabled = disabledStreams || reviewLoading;

  const startAnswerHandler = (type: DetailTabType) => {
    changeTab(type);
    if (type && !streams[type].answer) {
      streams[type].startAnswer();
    }
  };

  const clickReviewHandler = () => {
    changeTab('review');
    refetch();
  };

  const buttons = getTabButtons(
    productType,
    startAnswerHandler,
    clickReviewHandler
  );

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
          <Instruction productType={productType} />
        ) : tabType === 'review' ? (
          <ReviewContent id={id} />
        ) : (
          <Answer {...streams[tabType]} {...answerProps[tabType]} />
        )}
      </section>
    </div>
  );
}
