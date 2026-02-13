// app/sitemap.ts
import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mutiks.com';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Project routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}