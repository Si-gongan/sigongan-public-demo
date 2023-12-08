/** @jsxImportSource @emotion/react */
import { BarLoader } from 'react-spinners';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import * as styles from './LoadMoreButton.styles';

interface Props {
  toNextPage: () => void;
  isFetching: boolean;
  isLastPage: boolean;
}

const LoadMoreButton: React.FC<Props> = (props) => {
  const { toNextPage, isFetching, isLastPage } = props;

  // 마지막 상품 UI
  if (isLastPage) {
    return (
      <div css={styles.descriptionContainer}>
        <FaMagnifyingGlass />
        <p css={styles.description}>
          더 이상 불러올 상품이 없습니다.
          <br />
          새로운 상품을 검색해 보세요.
        </p>
      </div>
    );
  }

  // default: 버튼 및 로딩 UI
  return (
    <div css={styles.container}>
      {isFetching ? (
        <BarLoader color="#aaa" speedMultiplier={1.2} />
      ) : (
        <button
          css={styles.btn}
          onClick={toNextPage}
          disabled={isFetching}
          aria-label="더 많은 상품 보기"
        >
          더 많은 상품 보기
        </button>
      )}
    </div>
  );
};

export default LoadMoreButton;
