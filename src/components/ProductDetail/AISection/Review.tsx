/** @jsxImportSource @emotion/react */
import ContentCard from '../../UI/Card/ContentCard';
import { AxiosError } from 'axios';
import { HashLoader } from 'react-spinners';
import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaRegFaceSurprise,
} from 'react-icons/fa6';
import * as styles from './Review.styles';

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
      <ContentCard>
        <div css={styles.descriptionContainer} tabIndex={0} ref={answerRef}>
          <HashLoader color="#333" loading size={24} />
          <p css={styles.description}>리뷰를 분석하고 있어요</p>
        </div>
      </ContentCard>
    );
  }
  if (error) {
    return (
      <ContentCard>
        <div css={styles.descriptionContainer} tabIndex={0} ref={answerRef}>
          <FaRegFaceSurprise size={20} color="#bbb" />
          <p css={styles.description}>리뷰 분석에 오류가 발생했어요</p>
        </div>
      </ContentCard>
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
