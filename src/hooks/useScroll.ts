import { useEffect, useState } from 'react';

interface ScrollData {
  scrollY: number;
  scrollX: number;
  scrollDirection: 'down' | 'up' | undefined;
}

const useScroll = (): ScrollData => {
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [bodyOffset, setBodyOffset] = useState<DOMRect>(
    document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState<number>(bodyOffset.top);
  const [scrollX, setScrollX] = useState<number>(bodyOffset.left);
  const [scrollDirection, setScrollDirection] =
    useState<ScrollData['scrollDirection']>();

  const listener = (event: Event) => {
    if (event) {
      setBodyOffset(document.body.getBoundingClientRect());
      setScrollY(bodyOffset.top);
      setScrollX(bodyOffset.left);
      setScrollDirection(lastScrollTop > bodyOffset.top ? 'down' : 'up');
      setLastScrollTop(bodyOffset.top);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
};

export default useScroll;
