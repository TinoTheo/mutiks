import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
                    <Link href="/" className="logo p-30">
         {/* Desktop navigation MUTIKS<span style={{ color: 'var(--c-accent)' }}>.</span>*/}
                       <Image
                         src="../images/mgi-logo.png"
                         alt="logo"
                         width={150}
                         height={100}
                         
                         unoptimized
                       />
        </Link>
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
        <div className="footer-col">
  <h5>Services</h5>
  <ul>
    <li><Link href="/services#prefabricated-containers">Prefabricated Containers</Link></li>
    <li><Link href="/services#steel-structures">Steel Structures</Link></li>
    <li><Link href="/services#lighting">Lighting Systems</Link></li>
    <li><Link href="/services#commercial">Commercial Construction</Link></li>
  </ul>
</div>
<div className="footer-col">
  <h5>Projects</h5>
  <ul>
    <li><Link href="/projects">Borrowdale Residences</Link></li>
    <li><Link href="/projects">Student Rooms</Link></li>
    <li><Link href="/projects">Officies</Link></li>
    <li><Link href="/projects">All Projects</Link></li>
  </ul>
</div>
        <div className="legal">
          &copy; 2025 Mutiks Grassroots Investments. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}