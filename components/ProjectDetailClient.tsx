'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useImageReveal } from '@/hooks/useImageReveal';
import { Project } from '@/types';

export default function ProjectDetailClient({ project }: { project: Project }) {
  if (!project) return notFound();

  const heroReveal = useImageReveal({ initialTranslate: true, initialGrayscale: false });
  const galleryReveal = useImageReveal({ initialTranslate: true, initialGrayscale: false });

  // Add project schema dynamically (client-side)
  useEffect(() => {
    const projectSchema = {
      '@context': 'https://schema.org',
      '@type': 'Project',
      name: project.title,
      description: project.description,
      location: {
        '@type': 'Place',
        address: project.location,
      },
      startDate: project.year,
      endDate: project.year,
      category: project.cat,
      keywords: `${project.cat}, construction project, steel structure, prefabricated building`,
      image: project.gallery.map(img => img),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(projectSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [project]);

  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ height: '70vh' }}>
        <Image
          src={project.img}
          alt={project.title}
          fill
          className={`hero-bg ${heroReveal.imageClassName}`}
          priority
          onLoadingComplete={heroReveal.onLoad}
          sizes="100vw"
          unoptimized
        />
        <div className="container hero-content">
          <p style={{ color: 'var(--c-accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
            {project.cat}
          </p>
          <h1 style={{ fontSize: '4rem', color: 'white' }}>{project.title}</h1>
        </div>
      </section>

      {/* Overview */}
      <section>
        <div className="container">
          <div className="grid-12">
            <div className="col-6">
              <h2 className="section-title" style={{ fontSize: '2.5rem' }}>
                Overview
              </h2>
              <p style={{ marginTop: '2rem', fontSize: '1.1rem', color: '#333' }}>
                {project.description}
              </p>
            </div>
            <div className="col-6">
              <div style={{ background: 'white', padding: '2rem', border: '1px solid #ddd' }}>
                <h4 style={{ textTransform: 'uppercase', marginBottom: '1.5rem' }}>Project Details</h4>
                <ul className="service-list">
                  <li><span>Location</span><span>{project.location}</span></li>
                  <li><span>Year</span><span>{project.year}</span></li>
                  <li><span>Timeline</span><span>{project.timeline}</span></li>
                  <li><span>Scope</span><span>{project.scope}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Project Gallery</h2>
          </div>
          <div className="grid-12">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="col-4">
                <div style={{ position: 'relative', height: '250px' }}>
                  <Image
                    src={img}
                    alt={`${project.title} - ${idx + 1}`}
                    fill
                    className={galleryReveal.imageClassName}
                    onLoadingComplete={galleryReveal.onLoad}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified Progress Section */}
      <section className="progress-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Construction Progress</h2>
            <p className="section-subtitle">Phases of execution</p>
          </div>
          <div className="progress-interface" style={{ height: '500px' }}>
            <div className="progress-controls">
              {['Groundwork', 'Frame', 'Enclosure', 'Finishing', 'Handover'].map((phase, idx) => (
                <div key={idx} className="phase-btn" style={{ cursor: 'default' }}>
                  {`0${idx + 1} ${phase}`} <span>→</span>
                </div>
              ))}
            </div>
            <div className="progress-viewport">
              <Image
                src="https://picsum.photos/seed/construction-progress/1000/600"
                alt="Construction progress"
                fill
                className="progress-img active"
                unoptimized
              />
              <div className="phase-info visible">
                <h3 style={{ fontSize: '2rem', textTransform: 'uppercase', fontFamily: 'var(--f-head)' }}>
                  Completed
                </h3>
                <p style={{ color: '#ccc', maxWidth: '600px' }}>
                  This project was delivered on schedule with full quality compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}