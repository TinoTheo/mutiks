'use client';

import { useState } from 'react';
import Image from 'next/image';

const phases = [
  {
    title: 'Ground Work',
    desc: 'The critical base for vertical longevity.',
    img: '../images/ground.webp',
  },
  {
    title: 'Frame',
    desc: 'The skeleton defines the form and load distribution.',
    img: '../images/frame.webp',
  },
  {
    title: 'Enclosure',
    desc: 'Protecting the internal structure from elements.',
    img: '../images/enclosure.webp',
  },
  {
    title: 'Finishing',
    desc: 'Internal fit-outs, flooring, and detailed electrical integration. Refinement for utility.',
    img: '../images/Finishing.webp',
  },
  {
    title: 'Handover',
    desc: 'Final inspection, cleaning, and site demobilization. Ready for occupation or operation.',
    img: '../images/handover-2.webp',
  },
];

export default function ConstructionProgress() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handlePhaseChange = (index: number) => {
    if (index === currentPhase) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentPhase(index);
      setAnimating(false);
    }, 300);
  };

  return (
    <section className="progress-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Execution Preview</h2>
          <p className="section-subtitle">The evolution of structure</p>
        </div>

        <div className="progress-interface">
          <div className="progress-controls">
            {phases.map((phase, idx) => (
              <button
                key={idx}
                className={`phase-btn ${currentPhase === idx ? 'active' : ''}`}
                onClick={() => handlePhaseChange(idx)}
              >
                {`0${idx + 1} ${phase.title}`} <span>→</span>
              </button>
            ))}
          </div>
          <div className="progress-viewport">
            {phases.map((phase, idx) => (
              <Image
                key={idx}
                src={phase.img}
                alt={phase.title}
                fill
                className={`progress-img ${currentPhase === idx ? 'active' : ''}`}
                unoptimized
              />
            ))}
            <div className={`phase-info ${!animating ? 'visible' : ''}`}>
              <h3
                style={{
                  fontSize: '2rem',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--f-head)',
                }}
              >
                {phases[currentPhase].title}
              </h3>
              <p style={{ color: '#ccc', maxWidth: '600px' }}>{phases[currentPhase].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


