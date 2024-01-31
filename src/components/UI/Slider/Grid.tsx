/** @jsxImportSource @emotion/react */
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import * as styles from './Grid.styles';

interface Props {
  children: React.ReactNode;
  currentPage: number;
  totalPage: number;
  nextPageFn: () => void;
  prevPageFn: () => void;
  title: string;
}

function GridSlider({
  children,
  currentPage,
  totalPage,
  nextPageFn,
  prevPageFn,
  title,
}: Props) {
  const pageText = `${currentPage + 1} / ${totalPage + 1}`;
  const pageLabel = `총 ${totalPage + 1} 페이지 중 ${currentPage + 1} 페이지`;

  return (
    <div role="region" aria-label={`${title} 상품 슬라이더`}>
      <div css={styles.container} role="group">
        {children}
      </div>
      <div css={styles.actions}>
        <button
          css={styles.arrowBtn}
          onClick={prevPageFn}
          aria-label="카테고리 상품 이전 페이지"
        >
          <FaAngleLeft />
        </button>
        <span css={styles.text} aria-label={pageLabel}>
          {pageText}
        </span>
        <span
          className="visually-hidden"
          aria-live="polite"
          aria-atomic="false"
        >
          {pageLabel}
        </span>
        <button
          css={styles.arrowBtn}
          onClick={nextPageFn}
          aria-label="카테고리 상품 다음 페이지"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default GridSlider;
