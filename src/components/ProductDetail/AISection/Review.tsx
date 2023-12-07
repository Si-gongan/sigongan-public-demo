/** @jsxImportSource @emotion/react */
import ContentCard from '../../UI/Card/ContentCard';
import { AxiosError } from 'axios';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa6';
import * as styles from './Review.styles';
import LoadingContent from './LoadingContent';
import ErrorContent from './ErrorContent';

interface Props {
  pros?: string[];
  cons?: string[];
  isLoading: boolean;
  error?: AxiosError;
  answerRef: React.RefObject<HTMLDivElement>;
}

const ReviewContent: React.FC<Props> = (props) => {
  const { pros, cons, isLoading, error, answerRef } = props;

  if (isLoading) {
    return (
      <LoadingContent answerRef={answerRef} message="리뷰를 분석하고 있어요" />
    );
  }

  if (error) {
    return (
      <ErrorContent
        answerRef={answerRef}
        message="리뷰 분석에 오류가 발생했어요"
      />
    );
  }

  if (pros?.length === 0 && cons?.length === 0) {
    return (
      <ErrorContent
        answerRef={answerRef}
        message="리뷰가 충분하지 않아 분석에 실패했어요"
      />
    );
  }

  return (
    <ContentCard>
      <div css={styles.container}>
        <div css={styles.answerContainer} tabIndex={0} ref={answerRef}>
          {/* 장점 */}
          <div css={styles.prosAndCons}>
            <div css={styles.title}>
              <FaRegThumbsUp size={20} />
              <p>추천</p>
            </div>
            <ul css={styles.list}>
              {pros?.map((text, index) => <li key={index}>{text}</li>)}
            </ul>
          </div>
          {/* 단점 */}
          <div css={styles.prosAndCons}>
            <div css={styles.title}>
              <FaRegThumbsDown size={20} />
              <p>비추천</p>
            </div>
            <ul css={styles.list}>
              {cons?.map((text, index) => <li key={index}>{text}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </ContentCard>
  );
};

export default ReviewContent;
