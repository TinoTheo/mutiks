'use client';

import { useEffect, useRef } from 'react';

export default function SteelStructureShowcase() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            svgRef.current?.classList.add('animate-lines');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="steel-showcase">
      <div className="container">
        <div className="grid-12">
          {/* Headline column */}
          <div className="col-6 steel-headline-col">
            <h2 className="steel-headline">
              Engineered
              <br />
              in Steel.
            </h2>
            <div className="steel-subline">
              <span></span> Structural skeleton
            </div>
          </div>

          {/* Geometric line composition column */}
          <div className="col-6 steel-lines-col">
            <svg
              ref={svgRef}
              className="steel-svg"
              viewBox="0 0 400 300"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Vertical grid lines */}
              <line
                className="steel-line vertical"
                x1="80"
                y1="20"
                x2="80"
                y2="280"
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />
              <line
                className="steel-line vertical"
                x1="160"
                y1="20"
                x2="160"
                y2="280"
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />
              <line
                className="steel-line vertical"
                x1="240"
                y1="20"
                x2="240"
                y2="280"
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />
              <line
                className="steel-line vertical"
                x1="320"
                y1="20"
                x2="320"
                y2="280"
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />

              {/* Horizontal grid lines */}
              <line
                className="steel-line horizontal"
                x1="40"
                y1="80"
                x2="360"
                y2="80"
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />
              <line
                className="steel-line horizontal"
                x1="40"
                y1="150"
                x2="360"
                y2="150"
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />
              <line
                className="steel-line horizontal"
                x1="40"
                y1="220"
                x2="360"
                y2="220"
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />

              {/* Cross braces – subtle, structural */}
              <line
                className="steel-line diagonal"
                x1="40"
                y1="80"
                x2="120"
                y2="20"
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.3"
              />
              <line
                className="steel-line diagonal"
                x1="160"
                y1="20"
                x2="240"
                y2="80"
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}