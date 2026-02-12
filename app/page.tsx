import Hero from '@/components/hero';
import Capabilities from '@/components/capabilities';
import LightingShowcase from '@/components/LightingShowcase';
import ConstructionProgress from '@/components/constructionProgress';
import PrefabricatedShowcase from '@/components/PrefabricatedShowcase';
import OnSiteExecution from '@/components/OnSiteExecution';
import SteelStructureShowcase from '@/components/SteelStructureShowcase';
import Metrics from '@/components/metrics';

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