import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div className="project-img-wrap">
        <Image
          src={project.img}
          alt={project.title}
          width={600}
          height={400}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          unoptimized
        />
      </div>
      <div className="project-info">
        <div className="project-cat">{project.cat}</div>
        <h3 className="project-title">{project.title}</h3>
      </div>
    </Link>
  );
}