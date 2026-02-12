import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <Image
        src="../images/steel-structures.jpg"
        alt="Construction Site"
        fill
        className="hero-bg"
        priority
        unoptimized
      />
      <div className="container hero-content">
        <p style={{ color: 'var(--c-accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
          Infrastructure Authority
        </p>
        <h1>Structural Longevity.<br />Engineered Precision.</h1>
        <Link href="/projects" className="btn">
          View Execution
        </Link>
      </div>
    </section>
  );
}