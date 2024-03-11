import {
  getCaption,
  getPriceDescription,
  getReport,
} from '../api/fetch/ai/api';
import PriceChart from '../components/ProductDetail/PriceChart/PriceChart';
import { MainProductTab, ProductTab } from '../types/product';
import { StreamType, useStream } from './useStream';

interface MainProductProps {
  productType: 'main';
  tabProps: MainProductTab;
}

interface SearchProductProps {
  productType: 'search';
  tabProps: ProductTab;
}

type Props = MainProductProps | SearchProductProps;

const useTab = ({ productType, tabProps }: Props) => {
  const { id } = tabProps;

  // useQuery 파라미터 변수
  const queryParam =
    productType === 'main' ? { url: tabProps.url } : { group: tabProps.group };

  // 스트림 관련 변수
  const streams: Record<string, StreamType> =
    productType === 'main'
      ? {
          caption: useStream({ url: tabProps.url }, getCaption),
        }
      : {
          report: useStream({ id }, getReport),
          caption: useStream({ id }, getCaption),
          price: useStream({ id }, getPriceDescription),
        };

  const disabledStreams =
    (productType === 'search' &&
      (!streams.report.isDone || !streams.price.isDone)) ||
    !streams.caption.isDone;

  // <Answer /> props
  const answerProps =
    productType === 'main'
      ? { report: {}, caption: {} }
      : {
          report: {},
          caption: {},
          price: {
            loadingMessage: '상품 가격을 분석하고 있어요',
            errorMessage: '가격 분석에 실패했어요',
            chart: tabProps.histories && (
              <PriceChart histories={tabProps.histories} />
            ),
          },
        };

  return { queryParam, streams, disabledStreams, answerProps };
};

export default useTab;
