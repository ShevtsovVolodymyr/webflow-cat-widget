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

interface KeyValue {
  key: number;
  value: string;
}
interface DiamondReport {
  dateOfReport: string;
  diamondImageUrl: string | null;
  diamond360VideoUrl: string | null;
  vlReportNumber: string | null;
  giaNumber: string;
  giaUrl: string | null;
  inscription: string; // ?
  shape: KeyValue | null;
  carat: number;
  color: KeyValue | null;
  clarity: KeyValue | null;
  cut: KeyValue | null;
  m1Measurements: number;
  m2Measurements: number;
  m3Measurements: number;
  colorTone: KeyValue | null;
  growthLines: KeyValue | null;
  visualPerformanceScore: number;
  visualPerformanceDescription: string;
  polish: KeyValue | null;
  symmetry: KeyValue | null;
  fluor: KeyValue | null;
  growingTechnique: KeyValue | null;
  growingTechniqueDescription: string | null;
  proportionsImageUrl: string | null;
  facetingDesignImageUrl: string | null;
  asetImageUrl: string | null;
  arrowsImageUrl: string | null;
  heartsImageUrl: string | null;
}

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [report, setReport] = useState<DiamondReport | null>(null);
  const { open, modal } = useModal();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || '';

    async function fetchReport() {
      try {
        const res = await fetch(`${apiUrl}?giaNumber=${id}`);
        const data: DiamondReport = await res.json();

        if (data) {
          setReport(data);
          console.log('Fetched data:', data);
        } else {
          setReport(null);
          setError('Diamond info not found.');
        }
      } catch {
        setReport(null);
        setError('Error fetching Diamond info.');
      } finally {
        setLoading(false);
      }
    }

    fetchReport();
  }, []);

  const formatDateString = (inputDate: string): string => {
    const date = new Date(inputDate);

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const formatNumberWithTwoDecimals = (num: number) => {
    // Convert the number to a string
    const numString = num.toString();
  
    // Check if the string already contains a decimal point
    if (numString.includes('.')) {
      const parts = numString.split('.');
      const decimalPart = parts[1];
  
      // If the decimal part is 2 or more digits, return as is.
      if (decimalPart.length >= 2) {
        return numString;
      } else {
        // Pad with a zero if only one decimal digit
        return `${numString}0`;
      }
    } else {
      // If it's an integer, add '.00'
      return `${numString}.00`;
    }
  };

  if (loading) return <DiamondLoader />;
  if (error) return <p className="error">{error}</p>;
  else if (report)
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
              {report.diamondImageUrl && (
                <img src={report.diamondImageUrl} alt="Actual diamond image" />
              )}
            </div>
            <a className="vl-scroller__video-btn" target="_blank">
              View 360° Video
            </a>
            <p className="vl-scroller__description">
              {!!report.carat && `${formatNumberWithTwoDecimals(report.carat)} Carat `}
              {report.shape && `${report.shape.value} `}
              {report.color && `${report.color.value}`}
              {report.clarity && `-${report.clarity.value} `}
              {report.cut && `${report.cut.value} Cut`}
            </p>
          </div>
          <div className="vl-report__data">
            <div className="vl-report__table">
              <div className="vl-report__table-row">
                <p className="f-16-500">
                  Date: {formatDateString(report.dateOfReport)}
                </p>
                <p className="f-16-500">Report No. {report.vlReportNumber}</p>
              </div>
            </div>
            <div className="vl-report__table">
              <div className="vl-report__table-row">
                <p>Shape & Cutting Style</p>
                <p>{report.shape?.value}</p>
              </div>
              <div className="vl-report__table-row">
                <p>Carat Weight</p>
                <p>{formatNumberWithTwoDecimals(report.carat)} Carat</p>
              </div>
              <div className="vl-report__table-row">
                <p>Measurements</p>
                <p>
                  {report.m1Measurements} - {report.m2Measurements} x{' '}
                  {report.m3Measurements} mm
                </p>
              </div>
            </div>
            <h3>Grading Essentials</h3>
            <div className="vl-report__tables">
              <div className="vl-report__table">
                <div className="vl-report__table-row">
                  <p>Color Grade</p>
                  <p>{report.colorTone?.value}</p>
                </div>
                <div className="vl-report__table-row">
                  <p>Clarity Grade</p>
                  <p>{report.clarity?.value}</p>
                </div>
                <div className="vl-report__table-row">
                  <p>Cut Grade</p>
                  <p>{report.cut?.value}</p>
                </div>
              </div>
              <div className="vl-report__table">
                <div className="vl-report__table-row">
                  <p>Color Tone</p>
                  <p>{report.colorTone?.value}</p>
                </div>
                <div className="vl-report__table-row">
                  <p>Growth Lines</p>
                  <p>{report.growthLines?.value}</p>
                </div>
                <div className="vl-report__table-row">
                  <p>Visual Performance</p>
                  <p>{report.visualPerformanceScore}%</p>
                </div>
              </div>
            </div>
            <div className="vl-report__scale-wrapper">
              <h3>Color&nbsp;Scale</h3>
              <ScaleComponent
                type="color"
                value={report.color?.value || null}
              />
            </div>
            <div className="vl-report__scale-wrapper">
              <h3>Clarity&nbsp;Scale</h3>
              <ScaleComponent
                type="clarity"
                value={report.clarity?.value || null}
              />
            </div>
            <h3>Additional Grading Information</h3>
            <div className="vl-report__tables">
              <div className="vl-report__table">
                <div className="vl-report__table-row">
                  <p>Polish</p>
                  <p>{report.polish?.value}</p>
                </div>
                <div className="vl-report__table-row">
                  <p>Symmetry</p>
                  <p>{report.symmetry?.value}</p>
                </div>
                <div className="vl-report__table-row">
                  <p>Fluorescence</p>
                  <p>{report.fluor?.value}</p>
                </div>
              </div>
              <div className="vl-report__table">
                <div className="vl-report__table-row">
                  <p>Inscription(s)</p>
                  <p>{report.inscription}</p>
                </div>
                <div className="vl-report__table-row">
                  <p>Growing Technique</p>
                  <Tooltip
                    content={report.growingTechniqueDescription}
                    position="bottom"
                  >
                    <p className="info-text">
                      {report.growingTechnique?.value}
                      {report.growingTechniqueDescription && (
                        <img src={infoIcon} alt="info" />
                      )}
                    </p>
                  </Tooltip>
                </div>
                <div className="vl-report__table-row">
                  <p>GIA Report</p>
                  {report.giaUrl && (
                    <a href={report.giaUrl} target="_blank">
                      {report.giaNumber}
                    </a>
                  )}
                  {!report.giaUrl && <p>{report.giaNumber}</p>}
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
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum
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
              <ColorToneComponent
                value={report.colorTone?.value || null}
              ></ColorToneComponent>
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
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum
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
              <GrowthLinesComponent
                value={report.growthLines?.value || null}
              ></GrowthLinesComponent>
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
                        multi-factor analysis that combines cut precision,
                        polish, symmetry, light behavior, and structural
                        clarity. In addition to these core measures, our system
                        incorporates advanced criteria such as growth line
                        visibility and nuanced color tone — factors often
                        overlooked in conventional grading — to provide a more
                        complete picture of a diamond’s true beauty.
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
              <VisualPerformanceCompoent
                value={report.visualPerformanceScore}
              ></VisualPerformanceCompoent>
              <p className="vl-report__text">
                {report.visualPerformanceDescription}
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
            {report.proportionsImageUrl && (
              <div className="images-wrapper__scheme-1">
                <img src={report.proportionsImageUrl} alt="Proportions" />
              </div>
            )}
            {report.facetingDesignImageUrl && (
              <div className="images-wrapper__scheme-2">
                <img src={report.facetingDesignImageUrl} alt="Facet Design" />
              </div>
            )}
          </div>
          <div className="images-wrapper__col-2">
            <h2>Optical Analysis</h2>
            <OpticalAnalyssisComponent
              asetImage={report.asetImageUrl}
              arrowImage={report.arrowsImageUrl}
              heartImage={report.heartsImageUrl}
            ></OpticalAnalyssisComponent>
          </div>
        </section>
        <section className="vl-report__about">
          <h3>About This Report</h3>
          <p>
            This report reflects the professional opinion of trained
            gemologists, using advanced equipment and GIA-referenced standards
            at the time of evaluation. Grading is an expert assessment and may
            vary slightly between laboratories or conditions.
          </p>
          <p>
            This document is not an appraisal or valuation and applies only to
            the diamond identified by the report number, provided it remains
            unaltered. Images and diagrams are for reference only and may not be
            to scale.
          </p>
          <p>
            VeraLume makes no warranties beyond the accuracy of the grading at
            issuance. This report is non-transferable and intended solely for
            the original purchaser. To confirm authenticity, visit
            vldiamond.com/verify.
          </p>
        </section>
        {modal}
      </>
    );
}

export default App;
