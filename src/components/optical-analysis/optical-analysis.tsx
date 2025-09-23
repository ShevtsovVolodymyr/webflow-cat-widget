import React from 'react';
import './optical-analysis.scss';
import veralumeLogo from '../../../public/veralume-logo-green.svg';

interface OpticalAnalyssisComponentProps {
  asetImage: string;
  arrowImage: string;
  heartImage: string;
}

const OpticalAnalyssisComponent: React.FC<OpticalAnalyssisComponentProps> = ({
  asetImage,
  arrowImage,
  heartImage,
}) => {
  return (
    <div className="vl-optical-analysis">
      {asetImage && (
        <div className="vl-optical-analysis__col-1">
          <div
            className={`${
              !arrowImage && !heartImage ? 'vl-optical-analysis__single' : ''
            }`}
          >
            <div className="vl-optical-analysis__aset">
              <img
                src={veralumeLogo}
                alt="VeraLume Logo"
                className="vl-optical-analysis__logo"
              />
              <div className="vl-optical-analysis__aset-image-wrapper">
                <img
                  src="https://placehold.co/600x400?text=ASET Image placeholder"
                  alt="Lorem ipsum"
                  className="vl-optical-analysis__aset-image"
                />
                <p>ASET Image</p>
              </div>
            </div>
            <ul className="vl-optical-analysis__legend">
              <li>Brightness</li>
              <li>Less Bright</li>
              <li>Light Leakage</li>
              <li>Contrast</li>
            </ul>
          </div>
        </div>
      )}
      {(arrowImage || heartImage) && (
        <div className="vl-optical-analysis__col-2">
          {arrowImage && (
            <div className="vl-optical-analysis__arrow">
              <img
                src="https://placehold.co/600x400?text=Arrow Image placeholder"
                alt="Lorem ipsum"
              />

              <p>Arrow Image</p>
            </div>
          )}
          {heartImage && (
            <div className="vl-optical-analysis__heart">
              <img
                src="https://placehold.co/600x400?text=Heart Image placeholder"
                alt="Lorem ipsum"
              />
              <p>Heart Image</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OpticalAnalyssisComponent;
