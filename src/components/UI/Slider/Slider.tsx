/** @jsxImportSource @emotion/react */
import { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import * as styles from './Slider.styles';

interface Props {
  children: React.ReactNode;
}

const Slider: React.FC<Props> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollHandler = (type: 'right' | 'left') => {
    if (scrollRef.current && scrollRef.current.scrollLeft !== null) {
      if (type === 'right') {
        scrollRef.current.scrollLeft += scrollRef.current.offsetWidth;
      } else {
        scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;
      }
    }
  };

  return (
    <div css={styles.container}>
      <div css={styles.items} ref={scrollRef}>
        {children}
      </div>
      <button
        onClick={() => scrollHandler('left')}
        css={styles.scrollBtn('left')}
      >
        <FaAngleLeft size={16} />
      </button>
      <button
        onClick={() => scrollHandler('right')}
        css={styles.scrollBtn('right')}
      >
        <FaAngleRight size={16} />
      </button>
    </div>
  );
};

export default Slider;
