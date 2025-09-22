import { useEffect, useState } from 'react';
import veralumeLogo from '../public/veralume-logo-green.svg';
import './styles/_main.scss';

import ScaleComponent from './components/scale/scale';
import ColorToneComponent from './components/color-tone/color-tone';
import GrowthLinesComponent from './components/growth-lines/growth-lines';
interface Cat {
  id: string;
  name: string;
  origin: string;
  temperament: string;
  description: string;
  wikipedia_url?: string;
  reference_image_id?: string;
}

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || 'beng';

    async function fetchCat() {
      try {
        const res = await fetch(
          `https://api.thecatapi.com/v1/breeds/search?q=${id}`
        );
        const data: Cat[] = await res.json();

        if (data.length > 0) {
          const selected = data[0];

          // Fetch image if available
          if (selected.reference_image_id) {
            try {
              const imgRes = await fetch(
                `https://api.thecatapi.com/v1/images/${selected.reference_image_id}`
              );
              const imgData = await imgRes.json();
            } catch {
              // fallback to placeholder
            }
          }
        } else {
          setError('Cat not found.');
        }
      } catch {
        setError('Error fetching cat info.');
      } finally {
        setLoading(false);
      }
    }

    fetchCat();
  }, []);

  if (loading) return <p>Loading...</p>;
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
          <div className="vl-report__section">
            <div className="vl-report__title-wrapper">
              <h2>Color Tone</h2>
              <button className="vl-report__btn with-icon">Learn more</button>
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
              <button className="vl-report__btn with-icon">Learn more</button>
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
              <button className="vl-report__btn with-icon">Learn more</button>
            </div>
            <p className="vl-report__text">
              This proprietary VeraLume score is a weighted measure of the
              factors that define a diamond's beauty
            </p>
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
                <p>HPHT</p>
              </div>
              <div className="vl-report__table-row">
                <p>GIA Report</p>
                <p>12256665522</p>
              </div>
            </div>
          </div>

          <h3>What this Grade Reflects</h3>
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
      <section className="vl-report__images-wrapper">
        <div>
          <h2>Proportions & Facet Design</h2>
        </div>
        <div>
          <h2>Optical Analysis</h2>
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
    </>
  );
}

export default App;
