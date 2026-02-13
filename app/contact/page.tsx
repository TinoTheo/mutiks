import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Construction Company Southern Africa',
  description: 'Contact Mutiks Grassroots Investments for prefabricated containers, steel structures, modular classrooms, and lighting installations. Harare and Gaborone offices.',
  alternates: {
    canonical: 'https://mutiks.com/contact',
  },
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="grid-12">
          {/* Left column – locations (static, no client logic) */}
          <div className="col-6 contact-left">
            <h1 className="section-title">Initiate Project</h1>
            <p className="contact-intro">
              Provide details regarding your structural requirements. Our team reviews submissions within 48 hours.
            </p>

            <div className="locations-section">
              <div className="section-label-group">
                <span className="accent-line"></span>
                <span className="section-label">Regional Offices</span>
              </div>

              <div className="grid-12 nested-grid">
                {/* Harare Office */}
                <div className="col-6 location-block">
                  <div className="location-card">
                    <h4 className="location-title">Harare Operations</h4>
                    <address className="location-address">
                      Wheeldon Borrowdale 436,
                      <br />
                      Harare, Zimbabwe
                    </address>
                    <div className="contact-links">
                      <a href="tel:+263783372825" className="call-link">
                        Call +263 78 337 2825
                      </a>
                      <a
                        href="https://wa.me/263783372825"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-cta"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Gaborone Office */}
                <div className="col-6 location-block">
                  <div className="location-card">
                    <h4 className="location-title">Gaborone Operations</h4>
                    <address className="location-address">
                      30481 Gaborone Block 8,
                      <br />
                      Gaborone, Botswana
                    </address>
                    <div className="contact-links">
                      <a href="tel:+26771234567" className="call-link">
                        Call +267 71 234 567
                      </a>
                      <a
                        href="https://wa.me/26771234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-cta"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Contact
            <div className="corporate-contact">
              <div className="section-label-group">
                <span className="accent-line"></span>
                <span className="section-label">Corporate Contact</span>
              </div>
              <div className="corporate-details">
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <a href="mailto:projects@mutiks.com" className="email-link">
                    projects@mutiks.com
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Call</span>
                  <a href="tel:+27111234567" className="call-link">
                    +27 11 123 4567
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">WhatsApp</span>
                  <a
                    href="https://wa.me/27111234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-cta small"
                  >
                    +27 11 123 4567
                  </a>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right column – form (client component) */}
          <div className="col-6 contact-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}