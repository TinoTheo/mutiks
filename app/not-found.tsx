import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Mutiks Grassroots Investments',
  description: 'The requested page could not be found. Return to our homepage to explore our construction services.',
};

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-text">
            The page you are looking for does not exist or has been moved.
            Return to our homepage to explore our construction and steel structure services.
          </p>
          <Link href="/" className="btn">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}