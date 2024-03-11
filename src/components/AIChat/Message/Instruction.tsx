/** @jsxImportSource @emotion/react */
import { FaQuoteLeft } from 'react-icons/fa6';
import * as styles from './Instruction.styles';

const questions = [
  {
    id: 1,
    text: '3만원 이하의 과일 추천해 줄래?',
  },
  {
    id: 2,
    text: '하늘색 모자 추천해줘',
  },
  {
    id: 3,
    text: '파스타 만들 때 필요한 재료를 추천해줘',
  },
];

interface Props {
  clickQuestion: (question: string) => void;
}

const ChatInstruction: React.FC<Props> = (props) => {
  const { clickQuestion } = props;

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const question = (event.target as HTMLButtonElement).textContent;
    if (question) {
      clickQuestion(question);
    }
  };

  return (
    <div css={styles.messageArea}>
      <div css={styles.container}>
        <FaQuoteLeft size={20} color="#6f6f6f" />
        <div css={styles.text} tabIndex={0}>
          <p>
            대화를 통해 상품을 추천해주는 픽포미의 AI 챗봇입니다. <br />
            아래 버튼을 눌러 대화를 시작해보세요.
          </p>
        </div>
        <div css={styles.actions}>
          {questions.map((question) => (
            <div key={question.id} css={styles.btnWrapper}>
              <button
                css={styles.btn}
                onClick={clickHandler}
                aria-label={question.text}
              >
                {question.text}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatInstruction;
