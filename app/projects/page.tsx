'use client';

import { useState } from 'react';
import { projects } from '@/data/project';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section>
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Project Portfolio</h1>
          <p className="section-subtitle">Execution record</p>
        </div>

        <div className="filter-bar">
          {['all', 'residential', 'Institutional','commercial'].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}