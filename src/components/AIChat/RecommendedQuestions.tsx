/** @jsxImportSource @emotion/react */
import * as styles from './RecommendedQuestions.styles';

interface Props {
  questions: string[];
  clickQuestion: (question: string) => void;
}

const RecommendedQuestions: React.FC<Props> = (props) => {
  const { questions, clickQuestion } = props;

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const question = (event.target as HTMLButtonElement).textContent;
    if (question) {
      clickQuestion(question);
    }
  };

  return (
    <div css={styles.wrapper}>
      {questions.map((question, index) => (
        <div key={index}>
          <button css={styles.btn} onClick={clickHandler} aria-label={question}>
            {question}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecommendedQuestions;
