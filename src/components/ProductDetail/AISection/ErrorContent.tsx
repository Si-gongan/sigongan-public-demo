/** @jsxImportSource @emotion/react */
import { FaRegFaceSurprise } from 'react-icons/fa6';
import * as styles from './AISection.styles';
import ContentCard from '../../UI/Card/ContentCard';

interface Props {
  answerRef: React.RefObject<HTMLDivElement>;
  message?: string;
}

const ErrorContent: React.FC<Props> = (props) => {
  const { answerRef } = props;
  const message = props.message ?? 'AI 생성 오류가 발생했어요';

  return (
    <ContentCard>
      <div css={styles.descriptionContainer} tabIndex={0} ref={answerRef}>
        <FaRegFaceSurprise size={20} color="#bbb" />
        <p css={styles.description}>{message}</p>
      </div>
    </ContentCard>
  );
};

export default ErrorContent;
