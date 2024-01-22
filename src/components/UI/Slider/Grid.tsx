/** @jsxImportSource @emotion/react */
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import * as styles from './Grid.styles';

interface Props {
  children: React.ReactNode;
  currentPage: number;
  totalPage: number;
  nextPageFn: () => void;
  prevPageFn: () => void;
  column?: number;
}

function GridSlider({
  children,
  currentPage,
  totalPage,
  nextPageFn,
  prevPageFn,
  column = 2,
}: Props) {
  const pageText = `${currentPage + 1} / ${totalPage + 1}`;

  return (
    <>
      <div css={styles.container(column)}>{children}</div>
      <div css={styles.actions}>
        <button css={styles.arrowBtn} onClick={prevPageFn} aria-label="이전">
          <FaAngleLeft />
        </button>
        <span css={styles.text}>{pageText}</span>
        <button css={styles.arrowBtn} onClick={nextPageFn} aria-label="다음">
          <FaAngleRight />
        </button>
      </div>
    </>
  );
}

export default GridSlider;
