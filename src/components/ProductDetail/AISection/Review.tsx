/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from 'react';
import ContentCard from '../../UI/Card/ContentCard';
import LoadingContent from './LoadingContent';
import ErrorContent from './ErrorContent';
import { queryClient } from '../../../App';
import { ReviewResponseModel } from '../../../api/axios/ai/types';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa6';
import * as styles from './Review.styles';

interface Props {
  id: string;
}

const ReviewContent: React.FC<Props> = (props) => {
  const { id } = props;
  const answerRef = useRef<HTMLDivElement>(null);

  const state = queryClient.getQueryState<ReviewResponseModel, Error>([
    'review',
    { id },
  ]);

  const data = state?.data;
  const status = state?.status;

  useEffect(() => {
    answerRef.current?.focus();
  }, [status]);

  switch (status) {
    case 'error':
      return (
        <ErrorContent
          answerRef={answerRef}
          message="리뷰 분석에 오류가 발생했어요"
        />
      );

    case 'pending':
      return (
        <LoadingContent
          answerRef={answerRef}
          message="리뷰를 분석하고 있어요"
        />
      );

    case 'success': {
      const pros = data?.pros;
      const cons = data?.cons;
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
                {pros && pros.length > 0 ? (
                  <ul css={styles.list}>
                    {pros.map((text, index) => (
                      <li key={index}>{text}</li>
                    ))}
                  </ul>
                ) : (
                  <p css={styles.description}>비추천 리뷰가 충분하지 않아요</p>
                )}
              </div>
              {/* 단점 */}
              <div css={styles.prosAndCons}>
                <div css={styles.title}>
                  <FaRegThumbsDown size={20} />
                  <p>비추천</p>
                </div>
                {cons && cons.length > 0 ? (
                  <ul css={styles.list}>
                    {cons.map((text, index) => (
                      <li key={index}>{text}</li>
                    ))}
                  </ul>
                ) : (
                  <p css={styles.description}>비추천 리뷰가 충분하지 않아요</p>
                )}
              </div>
            </div>
          </div>
        </ContentCard>
      );
    }

    default:
      return null;
  }
};

export default ReviewContent;
