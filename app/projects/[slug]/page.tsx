import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectDetailClient from '@/components/ProjectDetailClient';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const title = `${project.title} | ${project.cat} Construction Project | Mutiks`;
  const description = `${project.description} Completed in ${project.year} at ${project.location}. Scope: ${project.scope}`;

  return {
    title,
    description,
    keywords: [
      project.cat,
      'construction project',
      'steel structure',
      'prefabricated building',
      project.location,
    ],
    alternates: {
      canonical: `https://mutiks.com/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: project.img,
          width: 600,
          height: 400,
          alt: `${project.title} - ${project.cat} construction`,
        },
      ],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}