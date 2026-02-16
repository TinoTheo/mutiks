import ServiceBlock from '@/components/serviceBlock';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Services | Steel Structures, Prefabricated Containers & Lighting',
  description: 'Comprehensive construction services including prefabricated containers, steel structural systems, modular classrooms, street lighting installation, and institutional buildings.',
  alternates: {
    canonical: 'https://www.mutiks.africa/services',
  },
};

const servicesData = [
  {
    division: '01',
    title: 'Construction',
    items: [
      { label: 'Residential Housing', value: 'Single & Double Storey' },
      { label: 'Commercial Developments', value: 'Offices, Malls, Complexes' },
      { label: 'Institutional Projects', value: 'Schools, Clinics, Hospitals' },
      { label: 'Specialized Units', value: 'Garages & Warehousing' },
    ],
  },
  {
    division: '02',
    title: 'Infrastructure',
    items: [
      { label: 'Street Construction', value: 'Paving & Surfacing' },
      { label: 'Public Works', value: 'Drainage & Earthworks' },
      { label: 'Site Preparation', value: 'Leveling & Excavation' },
    ],
  },
  {
    division: '03',
    title: 'Lighting Systems',
    items: [
      { label: 'Street Lighting', value: 'Installation & Maintenance' },
      { label: 'Indoor Systems', value: 'Industrial & Commercial' },
      { label: 'Electrical', value: 'Full wiring & reticulation' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="section-title">Service Matrix</h1>
          <p className="section-subtitle">Comprehensive structural solutions</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          {servicesData.map((service, idx) => (
            <ServiceBlock key={idx} service={service} />
          ))}
        </div>
      </section>

      <section className="services-content-depth">
  <div className="container">
    <div className="grid-12">
      <div className="col-12">
        <h2 className="section-title">Prefabricated Container Structures</h2>
        <div className="content-block">
          <p>Our prefabricated container structures are engineered for rapid deployment without compromising structural integrity. Using ISO-standard shipping containers as modular units, we construct:</p>
          <ul>
            <li>Educational classrooms and school blocks</li>
            <li>Medical clinics and field hospitals</li>
            <li>Security checkpoints and guardhouses</li>
            <li>Construction site offices and worker accommodations</li>
            <li>Retail kiosks and pop-up stores</li>
          </ul>
          <p>Each unit features hot-rolled steel frames, certified welds, and institutional-grade durability with 50-year service life. Structures are fire-rated, weather-sealed, and comply with SANS 10160 and Eurocode standards.</p>
          <h3>Technical Specifications</h3>
          <ul>
            <li>Steel gauge: 14–16 gauge structural steel</li>
            <li>Thermal insulation: 50mm polyurethane foam</li>
            <li>Floor loading: 5kN/m²</li>
            <li>Wind resistance: 160 km/h</li>
            <li>Assembly time: 3–7 days on prepared foundation</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="grid-12" style={{ marginTop: '4rem' }}>
      <div className="col-12">
        <h2 className="section-title">Steel Structural Systems</h2>
        <div className="content-block">
          <p>Our steel structural systems form the backbone of commercial, industrial, and institutional buildings. We specialize in:</p>
          <ul>
            <li>Portal frames for warehouses and factories</li>
            <li>Multi-storey steel frames for office buildings</li>
            <li>Roof trusses and canopies</li>
            <li>Mezzanine floors and platforms</li>
            <li>Structural steel modifications and reinforcements</li>
          </ul>
          <p>All steel is sourced from certified mills, fabricated off-site for precision, and assembled on-site with minimal disruption. We use hot-rolled sections (IPE, HEA, HEB) and hollow structural sections (SHS, RHS, CHS) depending on load requirements.</p>
          <h3>Engineering Standards</h3>
          <ul>
            <li>Design: SANS 10162 / Eurocode 3</li>
            <li>Fabrication: ISO 3834 certified</li>
            <li>Welding: AWS D1.1 certified welders</li>
            <li>Protection: Hot-dip galvanized or industrial epoxy coating</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="grid-12" style={{ marginTop: '4rem' }}>
      <div className="col-12">
        <h2 className="section-title">Street & Indoor Lighting Systems</h2>
        <div className="content-block">
          <p>We design and install comprehensive lighting systems for infrastructure and commercial applications:</p>
          <ul>
            <li>Street lighting – LED luminaires, galvanized poles, underground cabling</li>
            <li>Public space illumination – parks, squares, pedestrian walkways</li>
            <li>Indoor commercial lighting – offices, warehouses, retail spaces</li>
            <li>Institutional lighting – schools, hospitals, government buildings</li>
            <li>Emergency and security lighting systems</li>
          </ul>
          <p>Our lighting solutions emphasize energy efficiency, durability, and uniform illumination. We use IP65-rated fixtures for outdoor applications and provide full electrical reticulation from distribution boards to final connection.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}