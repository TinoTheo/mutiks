'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations after component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      {/* Background Image (unchanged) */}
      <Image
                src="../images/steel-structures.webp"
        alt="Construction Site"
        fill
        className="hero-bg"
        priority
        unoptimized
      />

      {/* Animated overlay container */}
      <div className={`hero-content container ${isVisible ? 'animate' : ''}`}>
        {/* Logo */}
        <div className="hero-logo-wrapper">
          <Image
            src="/images/mgi-logo.png"
            alt="Mutiks Grassroots Investments company logo"
            width={180}
            height={60}
            className="hero-logo"
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="hero-headline">
          Structural Longevity.<br />Engineered Precision.
        </h1>

        {/* Subheadline */}
        <p className="hero-subheadline">
          Infrastructure Authority
        </p>

        {/* CTA Buttons */}
        <div className="hero-ctas">
          <Link href="/projects" className="btn">
            View Execution
          </Link>
        </div>
      </div>
    </section>
  );
}