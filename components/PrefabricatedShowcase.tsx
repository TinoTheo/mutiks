'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function PrefabricatedShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="prefab-showcase">
      {/* Background structural lines – intentional, low density */}


      <div className="container">
        <div className="grid-12">
          {/* Left column – messaging & value points */}
          <div className="col-6 prefab-content-col">
            <div className="prefab-accent-line"></div>
            <span className="prefab-label">Prefabricated Steel Systems</span>
            <h2 className="prefab-headline">
              Steel Framework.
              <br />
              <span>Institutional Strength.</span>
            </h2>
            <p className="prefab-description">
              Rapid‑deployment container classrooms, medical facilities, and institutional buildings.
              Engineered steel frames, precision‑manufactured, and assembled on‑site with minimal disruption.
            </p>

            {/* Value points – reduced to 4, clean grid */}
            <div className="prefab-value-grid">
              <div className="prefab-value-item">
                <h4>Rapid On‑Site Assembly</h4>
                <p>Days, not months. Prefabricated modules lock into place.</p>
              </div>
              <div className="prefab-value-item">
                <h4>Engineered Steel Frames</h4>
                <p>Hot‑rolled sections, certified welds, load‑optimised.</p>
              </div>
              <div className="prefab-value-item">
                <h4>Modular Expansion Capability</h4>
                <p>Stackable, linkable – scales with your institution.</p>
              </div>
              <div className="prefab-value-item">
                <h4>Institutional‑Grade Durability</h4>
                <p>50‑year service life. Fire‑rated, weather‑sealed.</p>
              </div>
            </div>

            <Link href="/contact" className="btn prefab-cta">
              Request Modular Construction
            </Link>
          </div>

          {/* Right column – curated steel structure image with subtle line overlay */}
          <div className="col-6 prefab-image-col">
            <div className="prefab-image-wrapper">
              <Image
                src="../images/steel-structures-2.jpg"
                alt="Exposed steel framework – prefabricated container structure"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={`prefab-image ${isVisible ? 'visible' : ''}`}
                unoptimized
              />
              {/* Subtle structural line overlay */}
              <div className="image-line-overlay">
                <div className="overlay-vertical"></div>
                <div className="overlay-horizontal"></div>
              </div>
              {/* Thin accent border on right side */}
              <div className="image-accent-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}