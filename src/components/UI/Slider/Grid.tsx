/** @jsxImportSource @emotion/react */
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import * as styles from './Grid.styles';

interface Props {
  children: React.ReactNode;
  currentPage: number;
  totalPage: number;
  nextPageFn: () => void;
  prevPageFn: () => void;
  ariaTitle: string;
  containerRef: React.RefObject<HTMLDivElement>;
  isReadPage: boolean;
}

function GridSlider({
  children,
  currentPage,
  totalPage,
  nextPageFn,
  prevPageFn,
  ariaTitle,
  containerRef,
  isReadPage,
}: Props) {
  const pageText = `${currentPage + 1} / ${totalPage + 1}`;
  const pageLabel = `총 ${totalPage + 1} 페이지 중 ${currentPage + 1} 페이지`;

  return (
    <div role="region" aria-label={`${ariaTitle} 상품 슬라이더`}>
      <div
        css={styles.container}
        role="group"
        aria-label={`${ariaTitle} 상품`}
        ref={containerRef}
        tabIndex={-1}
      >
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
        <span css={styles.text} aria-labelledby="grid-page-label">
          {pageText}
        </span>
        <span
          className="visually-hidden"
          id="grid-page-label"
          aria-live={isReadPage ? 'polite' : undefined}
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
