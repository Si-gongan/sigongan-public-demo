/** @jsxImportSource @emotion/react */
import { ReactNode, useEffect, useRef } from 'react';
import PendingContent from './PendingContent';
import LoadingContent from './LoadingContent';
import ErrorContent from './ErrorContent';
import AnswerControlButton from './AnswerControlButton';
import * as styles from './AISection.styles';
import { StreamType } from '../../../hooks/useStream';

interface Props extends StreamType {
  loadingMessage?: string;
  errorMessage?: string;
  chart?: ReactNode;
}

const Answer: React.FC<Props> = (props) => {
  const { state, answer, answerRef, isDone, startAnswer, stopAnswer } = props;
  const chart = props.chart ?? null;
  const answerEndRef = useRef<HTMLDivElement>(null);

  // answer가 없거나, 답변 생성이 끝났거나, error가 발생한 경우 '답변 재생성' 버튼
  const startButtonCondition =
    (state === 'pending' && !answer) ||
    (state === 'pending' && answer && isDone) ||
    state === 'error';

  // content 렌더링 맵
  const contentMap = {
    pending: (
      <PendingContent answer={answer} answerRef={answerRef} chart={chart} />
    ),
    loading: (
      <LoadingContent
        answerRef={answerRef}
        loadingMessage={props.loadingMessage}
      />
    ),
    error: (
      <ErrorContent answerRef={answerRef} errorMessage={props.errorMessage} />
    ),
  };

  const scrollToBottom = () => {
    answerEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [answer]);

  return (
    <div css={styles.content}>
      <AnswerControlButton
        isStartButton={startButtonCondition}
        startAnswer={startAnswer}
        stopAnswer={stopAnswer}
      />
      {contentMap[state]}
      <div ref={answerEndRef} />
    </div>
  );
};

export default Answer;
