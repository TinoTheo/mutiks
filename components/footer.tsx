import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4>MUTIKS.</h4>
            <p>Engineered for large-scale execution. Delivered with measurable precision.</p>
          </div>
          <div className="footer-col">
            <h5>Navigation</h5>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Sectors</h5>
            <ul>
              <li>Residential</li>
              <li>Commercial</li>
              <li>Infrastructure</li>
              <li>Lighting</li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Safety Certificates</li>
            </ul>
          </div>
        </div>
        <div className="legal">
          &copy; 2023 Mutiks Grassroots Investments. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}