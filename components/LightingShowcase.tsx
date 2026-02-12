'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LightingShowcase() {
  return (
    <section className="lighting-showcase">
      <div className="container">
        <div className="grid-12">
          {/* Image column – placed first for mobile stacking */}
          <div className="col-6 lighting-image-col">
            <div className="lighting-image-wrapper">
              <Image
                src="../images/solar-lights.webp"
                alt="Street and indoor lighting installation"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="lighting-image"
                unoptimized
              />
            </div>
          </div>

          {/* Content column */}
          <div className="col-6 lighting-content">
            <div className="lighting-accent-line"></div>
            <span className="lighting-label">Infrastructure Lighting</span>
            <h2 className="lighting-headline">
              Structured<span>.</span>
              <br />
              Lighting Authority
            </h2>
            <p className="lighting-description">
              Precision‑engineered illumination for streets, public spaces, and commercial interiors.
              Our systems combine durability with visual discipline.
            </p>
            <ul className="lighting-features">
              <li>Street light installation</li>
              <li>Public infrastructure lighting</li>
              <li>Indoor commercial systems</li>
              <li>Energy‑efficient solutions</li>
            </ul>
            <Link href="/contact" className="btn lighting-cta">
              Request Lighting Installation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}