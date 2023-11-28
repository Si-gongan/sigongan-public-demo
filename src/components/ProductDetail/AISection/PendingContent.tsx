/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import ContentCard from '../../UI/Card/ContentCard';
import { FaCircleInfo } from 'react-icons/fa6';
import * as styles from './AISection.styles';

interface Props {
  answer?: string;
  answerRef: React.RefObject<HTMLDivElement>;
  chart?: ReactNode;
}

const PendingContent: React.FC<Props> = (props) => {
  const { answer, answerRef, chart } = props;
  return (
    <ContentCard>
      {answer ? (
        <>
          {chart}
          <div css={styles.answerContainer} tabIndex={0} ref={answerRef}>
            <p css={styles.answer}>{answer}</p>
          </div>
        </>
      ) : (
        <div css={styles.descriptionContainer} tabIndex={0} ref={answerRef}>
          <FaCircleInfo size={20} color="#bbb" />
          <p css={styles.description}>
            <strong>답변 재생성</strong> 버튼을 눌러 새로운 답변을 확인해 보세요
          </p>
        </div>
      )}
    </ContentCard>
  );
};

export default PendingContent;
