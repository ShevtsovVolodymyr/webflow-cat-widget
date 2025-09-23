/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import veralumeLogo from '../public/veralume-logo-green.svg';
import infoIcon from '../public/info.svg';
import './styles/_main.scss';
import { useModal } from './hooks/useModal';

import ScaleComponent from './components/scale/scale';
import ColorToneComponent from './components/color-tone/color-tone';
import GrowthLinesComponent from './components/growth-lines/growth-lines';
import VisualPerformanceCompoent from './components/visual-performance/visual-performance';
import OpticalAnalyssisComponent from './components/optical-analysis/optical-analysis';
import DiamondLoader from './components/diamond-loader/diamond-loader';
import { Tooltip } from './components/tooltip/tooltip';

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const { open, modal } = useModal();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || '';

    async function fetchReport() {
      try {
        const res = await fetch(`${apiUrl}?q=${id}`);
        const data: any = await res.json();

        if (data) {
          console.log('Fetched data:', data);
        } else {
          setError('Diamond info not found.');
        }
      } catch {
        setError('Error fetching Diamond info.');
      } finally {
        setLoading(false);
      }
    }

    fetchReport();
  }, []);

  if (loading) return <DiamondLoader />;
  if (error) return <p className="error">{error}</p>;

  return (
    <>
      <section className="vl-report__data-wrapper">
        <div className="vl-report__scroller vl-scroller">
          <div className="vl-scroller__header">
            <img
              src={veralumeLogo}
              alt="VeraLume Logo"
              className="vl-scroller__logo"
            />
            <a className="vl-scroller__pdf-btn" target="_blank">
              Download pdf
            </a>
          </div>
          <h1 className="vl-scroller__title">
            Laboratory Grown <br /> Diamond Report
          </h1>
          <div className="vl-scroller__image-wrapper">
            <img
              src="https://placehold.co/600x400?text=Diamond image placeholder"
              alt="Lorem ipsum"
            />
          </div>
          <a className="vl-scroller__video-btn" target="_blank">
            View 360° Video
          </a>
          <p className="vl-scroller__description">
            1.00 Carat Round Diamond D-VVS2 Ideal Cut
          </p>
        </div>
        <div className="vl-report__data">
          <div className="vl-report__table">
            <div className="vl-report__table-row">
              <p className="f-16-500">Date: February 13, 2025</p>
              <p className="f-16-500">Report No. TG6836482837</p>
            </div>
          </div>
          <div className="vl-report__table">
            <div className="vl-report__table-row">
              <p>Shape & Cutting Style</p>
              <p>Round Brilliant</p>
            </div>
            <div className="vl-report__table-row">
              <p>Carat Weight</p>
              <p>1.00 Carat</p>
            </div>
            <div className="vl-report__table-row">
              <p>Measurements</p>
              <p>6.45 - 6.51 x 3.92 mm</p>
            </div>
          </div>
          <h3>Grading Essentials</h3>
          <div className="vl-report__tables">
            <div className="vl-report__table">
              <div className="vl-report__table-row">
                <p>Color Grade</p>
                <p>D</p>
              </div>
              <div className="vl-report__table-row">
                <p>Clarity Grade</p>
                <p>VVS 2</p>
              </div>
              <div className="vl-report__table-row">
                <p>Cut Grade</p>
                <p>Ideal</p>
              </div>
            </div>
            <div className="vl-report__table">
              <div className="vl-report__table-row">
                <p>Color Tone</p>
                <p>Pure</p>
              </div>
              <div className="vl-report__table-row">
                <p>Growth Lines</p>
                <p>None</p>
              </div>
              <div className="vl-report__table-row">
                <p>Visual Performance</p>
                <p>97%</p>
              </div>
            </div>
          </div>
          <div className="vl-report__scale-wrapper">
            <h3>Color Scale</h3>
            <ScaleComponent type="color" value="D" />
          </div>
          <div className="vl-report__scale-wrapper">
            <h3>Clarity Scale</h3>
            <ScaleComponent type="clarity" value="VVS2" />
          </div>
          <h3>Additional Grading Information</h3>
          <div className="vl-report__tables">
            <div className="vl-report__table">
              <div className="vl-report__table-row">
                <p>Polish</p>
                <p>Excellent</p>
              </div>
              <div className="vl-report__table-row">
                <p>Symmetry</p>
                <p>Excellent</p>
              </div>
              <div className="vl-report__table-row">
                <p>Fluorescence</p>
                <p>None</p>
              </div>
            </div>
            <div className="vl-report__table">
              <div className="vl-report__table-row">
                <p>Inscription(s)</p>
                <p>TG6865666566</p>
              </div>
              <div className="vl-report__table-row">
                <p>Growing Technique</p>
                <Tooltip
                  content="This Laboratory Grown Diamond was created by High Pressure High Temperature (HPHT) growth process. Type II"
                  position="bottom"
                >
                  <p className="info-text">
                    HPHT <img src={infoIcon} alt="info" />
                  </p>
                </Tooltip>
              </div>
              <div className="vl-report__table-row">
                <p>GIA Report</p>
                <a href="" target="_blank">
                  12256665522
                </a>
              </div>
            </div>
          </div>
          <div className="vl-report__section">
            <div className="vl-report__title-wrapper">
              <h2>Color Tone</h2>
              <button
                className="vl-report__btn with-icon"
                onClick={() =>
                  open(
                    'Color Tone',
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                  )
                }
              >
                Learn more
              </button>
            </div>
            <p className="vl-report__text">
              Evaluates subtle undertones (brown, gray, blue) that can be
              present even in <br /> colorless-graded diamonds and may affect
              the diamond’s overall appearance.
            </p>
            <ColorToneComponent value="pure"></ColorToneComponent>
          </div>
          <div className="vl-report__section">
            <div className="vl-report__title-wrapper">
              <h2>Growth Lines</h2>
              <button
                className="vl-report__btn with-icon"
                onClick={() =>
                  open(
                    'Growth Lines',
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                  )
                }
              >
                Learn more
              </button>
            </div>
            <p className="vl-report__text">
              Assesses internal growth lines formed during crystal growth that
              can impact brilliance and transparency
            </p>
            <GrowthLinesComponent value="none"></GrowthLinesComponent>
          </div>
          <div className="vl-report__section">
            <div className="vl-report__title-wrapper">
              <h2>Visual Performance</h2>
              <button
                className="vl-report__btn with-icon"
                onClick={() =>
                  open(
                    'Visual Performance',
                    <p>
                      Each Veralume Visual Performance score is derived from a
                      multi-factor analysis that combines cut precision, polish,
                      symmetry, light behavior, and structural clarity. In
                      addition to these core measures, our system incorporates
                      advanced criteria such as growth line visibility and
                      nuanced color tone — factors often overlooked in
                      conventional grading — to provide a more complete picture
                      of a diamond’s true beauty.
                    </p>
                  )
                }
              >
                Learn more
              </button>
            </div>
            <p className="vl-report__text">
              This proprietary VeraLume score is a weighted measure of the
              factors that define a diamond's beauty
            </p>
            <VisualPerformanceCompoent value={97}></VisualPerformanceCompoent>
            <p className="vl-report__text">
              Exceptional brilliance and balance, with precise symmetry, refined
              color tone, and no visible growth lines.
            </p>
          </div>

          <h3 className="vl-report__list-title">What this Grade Reflects</h3>
          <ul className="vl-report__list">
            <li>Appeal of the face-up shape outline</li>
            <li>Precision of facet patterning</li>
            <li>Consistency of light return</li>
            <li>Minimization of dark areas</li>
            <li>Strength of scintillation and contrast</li>
            <li>Balance of proportions that enhance beauty</li>
          </ul>
        </div>
      </section>
      <section className="vl-report__images-wrapper images-wrapper">
        <div className="images-wrapper__col-1">
          <h2>Proportions & Facet Design</h2>
          <div className="images-wrapper__scheme-1">
            <img
              src="https://placehold.co/600x400?text=Scheme 1 placeholder"
              alt="Lorem ipsum"
            />
          </div>
          <div className="images-wrapper__scheme-2">
            <img
              src="https://placehold.co/600x400?text=Scheme 2 image placeholder"
              alt="Lorem ipsum"
            />
          </div>
        </div>
        <div className="images-wrapper__col-2">
          <h2>Optical Analysis</h2>
          <OpticalAnalyssisComponent
            asetImage="1"
            arrowImage="1"
            heartImage="1"
          ></OpticalAnalyssisComponent>
        </div>
      </section>
      <section className="vl-report__about">
        <h3>About This Report</h3>
        <p>
          This report reflects the professional opinion of trained gemologists,
          using advanced equipment and GIA-referenced standards at the time of
          evaluation. Grading is an expert assessment and may vary slightly
          between laboratories or conditions.
        </p>
        <p>
          This document is not an appraisal or valuation and applies only to the
          diamond identified by the report number, provided it remains
          unaltered. Images and diagrams are for reference only and may not be
          to scale.
        </p>
        <p>
          VeraLume makes no warranties beyond the accuracy of the grading at
          issuance. This report is non-transferable and intended solely for the
          original purchaser. To confirm authenticity, visit
          vldiamond.com/verify.
        </p>
      </section>
      {modal}
    </>
  );
}

export default App;
