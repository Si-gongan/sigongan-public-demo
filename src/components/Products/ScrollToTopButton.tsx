/** @jsxImportSource @emotion/react */
import useScroll from '../../hooks/useScroll';
import { BiUpArrowAlt } from 'react-icons/bi';
import * as styles from './ScrollToTopButton.styles';

const ScrollToTopButton: React.FC = () => {
  const { scrollY } = useScroll();
  const isVisible = scrollY > 56;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div css={styles.container}>
          <button
            css={styles.btn}
            onClick={scrollToTop}
            aria-label="맨 위로 이동"
          >
            <BiUpArrowAlt size={24} />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
