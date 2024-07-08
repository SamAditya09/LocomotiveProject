import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const useLocomotiveScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        getDirection: true,
      });

      scrollRef.current.locomotive = scroll;
      
      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, []);

  return scrollRef;
};

export default useLocomotiveScroll;
