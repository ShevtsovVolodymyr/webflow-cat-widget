import React from 'react';
import './color-tone.scss';
import { COLOR_TONE } from '../../consts';

interface ColorToneComponentProps {
  value: string;
}

const ColorToneComponent: React.FC<ColorToneComponentProps> = ({ value }) => {
  return (
    <div className="vl-color-tone__wrapper">
      <div className="vl-color-tone">
        {COLOR_TONE.map((item, index) => (
          <div
            key={index}
            className={`vl-color-tone__item ${item} ${
              item === value ? 'selected' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorToneComponent;
