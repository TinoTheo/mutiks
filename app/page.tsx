import Hero from '@/components/hero';
import Capabilities from '@/components/capabilities';
import LightingShowcase from '@/components/LightingShowcase';
import ConstructionProgress from '@/components/constructionProgress';
import PrefabricatedShowcase from '@/components/PrefabricatedShowcase';
import OnSiteExecution from '@/components/OnSiteExecution';
import SteelStructureShowcase from '@/components/SteelStructureShowcase';
import Metrics from '@/components/metrics';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction & Steel Structure Specialists | Mutiks Grassroots Investments',
  description: 'Premium construction company specializing in prefabricated containers, steel structures, modular classrooms, street lighting, and institutional buildings across Southern Africa.',
  keywords: [
    'construction company',
    'prefabricated containers',
    'modular buildings',
    'steel structures',
    'construction contractors',
  ],
  alternates: {
    canonical: 'https://www.mutiks.africa',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <LightingShowcase />
      <ConstructionProgress />
      {/* New: Prefabricated Steel Authority – after Execution Preview */}
      <PrefabricatedShowcase />
      {/* New: On‑Site Execution Video – immediately below */}
      <OnSiteExecution />
      {/* Existing: Geometric Steel Intermission */}
      <SteelStructureShowcase />
    </>
  );
}