import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    mouseX: 0,
    mouseY: 0,
    isMouseOverGrid: false,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize(prev => ({
        ...prev,
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    }

    function handleMouseMove(e: MouseEvent) {
      setWindowSize(prev => ({
        ...prev,
        mouseX: e.clientX,
        mouseY: e.clientY,
      }));
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return windowSize;
}

