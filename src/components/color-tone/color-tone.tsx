import React from 'react';
import './color-tone.scss';
import { COLOR_TONE } from '../../consts';

interface ColorToneComponentProps {
  value: string | null;
}

const ColorToneComponent: React.FC<ColorToneComponentProps> = ({ value }) => {
  return (
    <div className="vl-color-tone__wrapper">
      <div className="vl-color-tone">
        {COLOR_TONE.map((item, index) => (
          <div
            key={index}
            className={`vl-color-tone__item ${item.key.toLocaleLowerCase()} ${
              item.key === value ? 'selected' : ''
            }`}
          >
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorToneComponent;
