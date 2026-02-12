import ServiceBlock from '@/components/serviceBlock';

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
    </>
  );
}