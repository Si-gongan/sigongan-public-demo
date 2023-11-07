/** @jsxImportSource @emotion/react */
import { BarLoader } from 'react-spinners';
import * as styles from './LoadMoreButton.styles';

interface Props {
  toNextPage: () => void;
  isLoading: boolean;
}

const LoadMoreButton: React.FC<Props> = (props) => {
  const { toNextPage, isLoading } = props;
  return (
    <div css={styles.container}>
      {isLoading && <BarLoader color="#aaa" speedMultiplier={1.2} />}
      {!isLoading && (
        <button css={styles.btn} onClick={toNextPage} disabled={isLoading}>
          더 많은 상품 보기
        </button>
      )}
      {/* TODO: 마지막 페이지 알려주는 UI */}
    </div>
  );
};

export default LoadMoreButton;
