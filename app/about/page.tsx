import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <section style={{ backgroundColor: 'var(--c-charcoal)', color: 'white', padding: '6rem 0' }}>
        <div className="container">
          <h1 className="section-title" style={{ color: 'white' }}>
            Company Foundation
          </h1>
          <p
            style={{
              maxWidth: '600px',
              marginTop: '2rem',
              fontSize: '1.2rem',
              lineHeight: '1.6',
            }}
          >
            Mutiks Grassroots Investments was established on the principle that structural integrity is
            non-negotiable. We do not soft-sell aesthetics; we engineer permanence.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid-12">
            <div className="col-6">
              <h2 className="font-head" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Construction Philosophy
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Our approach is subtractive. We remove uncertainty through strict adherence to engineering
                standards. We view every project—be it a private residence or a public street—as a contribution
                to the built environment that must outlast its creators.
              </p>
              <p>
                We utilize modular precision in our planning and aggressive timelines in our execution, ensuring
                resources are optimized and delays are eliminated.
              </p>
            </div>
            <div className="col-6">
              <Image
                src="../images/blueprint.webp"
                alt="Blueprints"
                width={800}
                height={600}
                style={{ filter: 'grayscale(100%)', width: '100%', height: 'auto' }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Operational Standards</h2>
          </div>
          <div className="grid-12">
            <div className="col-4">
              <h4 style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>Quality Compliance</h4>
              <p style={{ color: '#666' }}>
                Rigorous material testing and structural audits at every phase of development.
              </p>
            </div>
            <div className="col-4">
              <h4 style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>Safety Protocols</h4>
              <p style={{ color: '#666' }}>
                Zero-tolerance policy for safety violations on-site. PPE enforcement and regular drills.
              </p>
            </div>
            <div className="col-4">
              <h4 style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>Leadership</h4>
              <p style={{ color: '#666' }}>
                Site managers empowered to make immediate technical decisions to maintain momentum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}