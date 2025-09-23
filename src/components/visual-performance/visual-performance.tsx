import React, { useEffect, useRef, useState } from 'react';
import { VISUAL_PERFORMACE } from '../../consts';
import './visual-performance.scss';

interface VisualPerformanceProps {
  value: number;
}

const VisualPerformanceComponent: React.FC<VisualPerformanceProps> = ({
  value,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  const selectedIndex = VISUAL_PERFORMACE.findIndex(
    (item) => value > item.minValue && value <= item.maxValue
  );

  useEffect(() => {
    const updateIndicator = () => {
      const container = containerRef.current;
      if (!container) return;

      const items = container.querySelectorAll<HTMLDivElement>(
        '.vl-visual__label-wrapper'
      );
      if (items.length < 2) return;

      const firstRect = items[0].getBoundingClientRect();
      const lastRect = items[items.length - 1].getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // calculate center positions relative to container
      const startOffset =
        firstRect.left - containerRect.left + firstRect.width / 2;
      const endOffset = lastRect.left - containerRect.left + lastRect.width / 2;

      // clamp value into range 80–100
      const clamped = Math.max(80, Math.min(100, value));
      const percent = (100 - clamped) / 20; // 0 at 100, 1 at 80

      const position = startOffset + percent * (endOffset - startOffset);
      setIndicatorWidth(position);
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [value]);

  return (
    <div className="vl-visual" ref={containerRef}>
      {/* Top scale labels */}
      <div className="vl-visual__labels">
        {VISUAL_PERFORMACE.map((item, index) => (
          <div key={index} className="vl-visual__label-wrapper">
            <div
              className={`vl-visual__label ${
                index === selectedIndex ? 'selected' : ''
              }`}
            >
              {item.desc}
            </div>
            <div
              className={`vl-visual__percent ${
                index === selectedIndex ? 'selected' : ''
              }`}
            >
              {item.maxValue}
            </div>
          </div>
        ))}
      </div>

      {/* Main line */}
      <div className="vl-visual__line"></div>
      <div
        className="vl-visual__indicator"
        style={{ width: `${indicatorWidth}px` }}
      >
        <span className="vl-visual__indicator-value">{value}%</span>
      </div>
    </div>
  );
};

export default VisualPerformanceComponent;
