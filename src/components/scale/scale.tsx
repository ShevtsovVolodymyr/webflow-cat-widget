import React from 'react';
import { COLOR_SCALE, CLARITY_SCALE, type ScaleItem } from '../../consts';
import './scale.scss';

interface ScaleComponentProps {
  type: 'color' | 'clarity';
  value: string | null;
}

const ScaleComponent: React.FC<ScaleComponentProps> = ({ type, value }) => {
  // Get unique descriptions in order
  const data = type === 'color' ? COLOR_SCALE : CLARITY_SCALE;
  const uniqueDescriptionItems = data.reduce<ScaleItem[]>((acc, item) => {
    if (!acc.some((i) => i.desc === item.desc)) {
      acc.push(item);
    }
    return acc;
  }, []);

  // Find the index of the selected value
  const selectedIndex = data.findIndex((item) => item.value === value);

  return (
    <div className="vl-scale">
      {/* Top scale labels */}
      <div className="vl-scale__labels">
        {data.map((item, index) => (
          <div
            key={index}
            className={`vl-scale__label ${
              index === selectedIndex ? 'selected' : ''
            }`}
          >
            {item.value}
          </div>
        ))}
      </div>

      {/* Main line */}
      <div className="vl-scale__line"></div>

      {/* Bottom description labels */}
      <div className="vl-scale__bottom-labels">
        {uniqueDescriptionItems.map((item) => (
          <div
            key={item.desc}
            className={`vl-scale__bottom-label ${
              item.desc === data[selectedIndex]?.desc ? 'selected' : ''
            }`}
          >
            {item.desc}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScaleComponent;
