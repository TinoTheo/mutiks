import Link from 'next/link';

const reviews = [
  {
    author: 'Jackson',
    rating: 5,
    text: 'Very reliable and good I\'ve trusted the company',
    date: 'Feb 2026',
  },
  {
    author: 'Leon Wrld',
    rating: 5,
    text: 'Very reliable, but timing and customer service could be improved but thank you for the good job 👏.',
    date: 'Jan 2026',
  },
  {
    author: 'Lindisay Moloto',
    rating: 5,
    text: 'I will definitely give you 4 stars, thank you so much for your time management and the good work, I will recommend you to others.',
    date: 'Dec 2025',
  },
  {
    author: 'Weziwe Makhaye',
    rating: 5,
    text: 'Fast and reliable company',
    date: 'Nov 2025',
  },
];


const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Tiktok = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
</svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="18" cy="6" r="1.5" fill="currentColor" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

// Star icon (hard‑edged, no rounding)
const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polygon points="12,2 15,9 22,9 16,14 19,22 12,17 5,22 8,14 2,9 9,9 12,2" />
  </svg>
);

export default function StaticReviewsSection() {
  return (
    <section className="reviews-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">Trusted by industry leaders</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <h4 className="review-author">{review.author}</h4>
              </div>
              <div className="review-rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={`star ${i < review.rating ? 'filled' : ''}`}>
                    <StarIcon />
                  </span>
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-footer">
                <span className="review-date">{review.date}</span>
              </div>
            </div>
          ))}
        </div>



        <div className="social-links">
            <span className="social-label">Connect</span>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/mutiksgrassrootsinvestments"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://x.com/mutiksInv"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>

                            <a
                href="https://www.tiktok.com/@mutiks.grassroots"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                <Tiktok />
              </a>
            </div>
            </div>
      </div>
    </section>
  );
}