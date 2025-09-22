import React from 'react';
import './growth-lines.scss';
import { GROWTH_LINES } from '../../consts';

interface GrowthLinesComponentProps {
  value: string;
}

const GrowthLinesComponent: React.FC<GrowthLinesComponentProps> = ({
  value,
}) => {
  return (
    <div className="vl-growth-lines__wrapper">
      <div className="vl-growth-lines">
        {GROWTH_LINES.map((item, index) => (
          <div
            key={index}
            className={`vl-growth-lines__item ${item} ${
              item === value ? 'selected' : ''
            }`}
          >
            <div className="vl-growth-lines__item-title">{item}</div>
            <div className={`vl-growth-lines__item-image ${item}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowthLinesComponent;
