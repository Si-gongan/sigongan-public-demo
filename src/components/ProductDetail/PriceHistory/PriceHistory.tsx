import { History } from '../../../types/product';
import '../../../styles/price-history.css';
import { ApiSate } from '../../../types/api';
import PriceChart from './PriceChart';
import Answer from '../AISection/Answer';

interface Props {
  histories: History[];
  state: ApiSate;
  answer?: string;
  answerRef: React.RefObject<HTMLDivElement>;
}

const PriceHistory: React.FC<Props> = (props) => {
  const { histories, state, answer, answerRef } = props;
  const loadingMessage = '상품 가격을 분석하고 있어요';
  const errorMessage = '가격 분석에 실패했어요';

  return (
    <div>
      <PriceChart histories={histories} />
      <Answer
        state={state}
        answer={answer}
        answerRef={answerRef}
        loadingMessage={loadingMessage}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default PriceHistory;
