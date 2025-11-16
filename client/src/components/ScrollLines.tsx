import { useEffect, useState } from 'react';

export default function ScrollLines() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate line positions based on scroll
  const line1X = 15 + (scrollY * 0.02) % 10;
  const line2X = 85 - (scrollY * 0.015) % 10;
  const line3X = 35 + (scrollY * 0.025) % 15;
  const line4X = 65 - (scrollY * 0.018) % 12;

  return (
    <div className="scroll-lines">
      {/* Curved animated lines that follow scroll */}
      <div
        className="scroll-line"
        style={{
          left: `${line1X}%`,
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 0.8
        }}
      />
      <div
        className="scroll-line"
        style={{
          left: `${line2X}%`,
          transform: `translateY(${scrollY * 0.4}px)`,
          opacity: 0.75
        }}
      />
      <div
        className="scroll-line"
        style={{
          left: `${line3X}%`,
          transform: `translateY(${scrollY * 0.25}px)`,
          opacity: 0.7
        }}
      />
      <div
        className="scroll-line"
        style={{
          left: `${line4X}%`,
          transform: `translateY(${scrollY * 0.35}px)`,
          opacity: 0.65
        }}
      />
    </div>
  );
}
