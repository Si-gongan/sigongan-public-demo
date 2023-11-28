/** @jsxImportSource @emotion/react */
import { FaPause, FaRepeat } from 'react-icons/fa6';
import * as styles from './AISection.styles';

interface Props {
  isStartButton: boolean;
  startAnswer: () => void;
  stopAnswer: () => void;
}

const AnswerControlButton: React.FC<Props> = (props) => {
  const { isStartButton, startAnswer, stopAnswer } = props;

  return (
    <>
      {isStartButton ? (
        <div css={styles.actions} tabIndex={0}>
          <button css={styles.btn} onClick={startAnswer}>
            <FaRepeat /> 답변 재생성
          </button>
        </div>
      ) : (
        <div css={styles.actions} tabIndex={0}>
          <button css={styles.btn} onClick={stopAnswer}>
            <FaPause /> 생성 멈추기
          </button>
        </div>
      )}
    </>
  );
};

export default AnswerControlButton;
