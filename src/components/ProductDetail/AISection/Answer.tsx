/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from 'react';
import { ApiSate } from '../../../types/api';
import { HashLoader } from 'react-spinners';
import { FaRegFaceSurprise } from 'react-icons/fa6';
import * as styles from './AISection.styles';

interface Props {
  state: ApiSate;
  answer?: string;
  answerRef: React.RefObject<HTMLDivElement>;
}

const Answer: React.FC<Props> = (props) => {
  const { state, answer, answerRef } = props;
  const answerEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    answerEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [answer]);

  switch (state) {
    case 'pending':
      return (
        <div css={styles.content}>
          {answer && (
            <div css={styles.answerContainer} tabIndex={0} ref={answerRef}>
              <p css={styles.answer}>{answer}</p>
              <div ref={answerEndRef} />
            </div>
          )}
        </div>
      );
    case 'loading':
      return (
        <div css={styles.content}>
          <div css={styles.descriptionContainer} tabIndex={0} ref={answerRef}>
            <HashLoader color="#333" loading size={24} />
            <div css={styles.description}>AI가 답변을 생성하고 있어요</div>
          </div>
        </div>
      );
    case 'error':
      return (
        <div css={styles.content}>
          <div css={styles.descriptionContainer} tabIndex={0} ref={answerRef}>
            <FaRegFaceSurprise size={20} color="#bbb" />
            <p css={styles.description}>AI 생성 오류가 발생했어요</p>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Answer;
