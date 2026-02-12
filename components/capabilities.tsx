export default function Capabilities() {
  return (
    <section>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Core Capabilities</h2>
          <p className="section-subtitle">Execution across sectors</p>
        </div>
        <div className="grid-12">
          <div className="col-4 capability-card">
            <div className="capability-num">01</div>
            <h3 className="capability-title">Construction</h3>
            <p style={{ color: '#666' }}>
              Residential, commercial, and institutional structures built with uncompromising standards.
            </p>
          </div>
          <div className="col-4 capability-card">
            <div className="capability-num">02</div>
            <h3 className="capability-title">Infrastructure</h3>
            <p style={{ color: '#666' }}>
              Street development, public works, and large-scale ground engineering.
            </p>
          </div>
          <div className="col-4 capability-card">
            <div className="capability-num">03</div>
            <h3 className="capability-title">Lighting</h3>
            <p style={{ color: '#666' }}>
              Street and indoor lighting systems designed for visibility and durability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}