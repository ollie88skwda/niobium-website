'use client';

import { useState, useEffect, useRef } from 'react';

const LATIN = 'NIOBIUM';
const GREEK = 'ΝΙΟΒΙΟ';

export default function FlickerHeroText() {
  const [current, setCurrent] = useState<'latin' | 'greek'>('latin');
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const scheduleNext = () => {
      // Wait 3–7 seconds between flickers
      const delay = Math.random() * 4000 + 3000;
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(true);
        // Swap text at the darkest point of the flicker (~450ms in)
        setTimeout(() => {
          setCurrent(prev => (prev === 'latin' ? 'greek' : 'latin'));
        }, 450);
        // End animation after full flicker sequence, then schedule next
        setTimeout(() => {
          setIsAnimating(false);
          scheduleNext();
        }, 950);
      }, delay);
    };

    scheduleNext();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <h1
      className={`font-normal text-white mb-12 uppercase leading-[0.7] ${
        current === 'greek'
          ? 'font-greek text-[13vw] md:text-[12rem] tracking-[-0.02em]'
          : 'font-display text-[16vw] md:text-[15rem] tracking-[-0.05em]'
      }${isAnimating ? ' hero-flicker' : ''}`}
    >
      {current === 'greek' ? GREEK : LATIN}
    </h1>
  );
}
