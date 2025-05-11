import { useEffect, useState } from 'react';

interface UseScrollParams {
  threshold?: number;
}

export const useScroll = (options?: UseScrollParams) => {
  const [state, setState] = useState({
    isScrolled: false,
    scrollPosition: 0,
  });

  const { threshold = 0 } = options ?? {};

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      const isScrolled = scrollPosition > threshold;

      setState({ isScrolled, scrollPosition });
    };

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return state;
};
