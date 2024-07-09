import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current as Element);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return intersecting;
}
