'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function OnSiteExecution() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="onsite-execution">
      <div className="container">
        <div className="grid-12">
          {/* Left column – video */}
          <div className="col-6 onsite-video-col">
            <div className="video-wrapper">
              {isVisible && (
                <video
                  ref={videoRef}
                  className="onsite-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="../images/team.jpg"
                  preload="none"
                >
                  <source
                    src="../videos/team-work.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
              {!isVisible && (
                <Image
                  src="../images/handover-2.webp"
                  alt="On‑site execution preview"
                  fill
                  className="video-poster"
                  unoptimized
                />
              )}
            </div>
          </div>

          {/* Right column – structured messaging */}
          <div className="col-6 onsite-content-col">
            <div className="onsite-accent-line"></div>
            <span className="onsite-label">On‑Site Execution</span>
            <h2 className="onsite-headline">
              From Steel Frame
              <br />
              to Completed Classroom.
            </h2>
            <p className="onsite-description">
              Prefabricated container assembly, steel reinforcement, and rapid deployment – all executed
              under strict engineering supervision. Our site teams deliver institutional‑grade structures
              on schedule, without compromise.
            </p>
            <div className="onsite-stats">
             {/*  <div className="stat-item">
                <span className="stat-number">7</span>
                <span className="stat-label">days average assembly</span>
              </div> 
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">classrooms deployed</span>
              </div>*/}
            </div>
            <Link href="/projects" className="btn onsite-cta">
              View Project Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}



