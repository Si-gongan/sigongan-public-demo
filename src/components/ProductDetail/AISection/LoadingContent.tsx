/** @jsxImportSource @emotion/react */
import ContentCard from '../../UI/Card/ContentCard';
import { HashLoader } from 'react-spinners';
import * as styles from './AISection.styles';

interface Props {
  answerRef: React.RefObject<HTMLDivElement>;
  message?: string;
}

const LoadingContent: React.FC<Props> = (props) => {
  const { answerRef } = props;
  const message = props.message ?? 'AI가 답변을 생성하고 있어요';

  return (
    <ContentCard>
      <div css={styles.descriptionContainer} tabIndex={0} ref={answerRef}>
        <HashLoader color="#333" loading size={24} />
        <div css={styles.description}>{message}</div>
      </div>
    </ContentCard>
  );
};

export default LoadingContent;
