export default function Metrics() {
  return (
    <section>
      <div className="container">
        <div
          className="grid-12"
          style={{
            borderTop: '1px solid #ccc',
            borderBottom: '1px solid #ccc',
            padding: '4rem 0',
          }}
        >
          <div className="col-3" style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '3rem', fontFamily: 'var(--f-head)' }}>15+</h3>
            <p style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
              Years Active
            </p>
          </div>
          <div className="col-3" style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '3rem', fontFamily: 'var(--f-head)' }}>120+</h3>
            <p style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
              Projects Completed
            </p>
          </div>
          <div className="col-3" style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '3rem', fontFamily: 'var(--f-head)' }}>450</h3>
            <p style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
              Units Built
            </p>
          </div>
          <div className="col-3" style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '3rem', fontFamily: 'var(--f-head)' }}>100%</h3>
            <p style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>
              Safety Record
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}