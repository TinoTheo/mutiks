'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

// Business WhatsApp number (international format, no '+' or spaces)
const WHATSAPP_BUSINESS_NUMBER = '263783372825'; // Harare line

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Construction',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construct WhatsApp message
    const message = `Hello Mutiks Grassroots Investments,

Name: ${formData.name || '(not provided)'}
Phone: ${formData.phone || '(not provided)'}
Email: ${formData.email || '(not provided)'}
Project Type: ${formData.projectType}

Project Details:
${formData.message || '(no details)'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="contact-page">
      <div className="container">
        <div className="grid-12">
          {/* LEFT COLUMN – Locations & Corporate Contact */}
          <div className="col-6 contact-left">
            <h1 className="section-title">Initiate Project</h1>
            <p className="contact-intro">
              Provide details regarding your structural requirements. Our team reviews submissions within 48 hours.
            </p>

            {/* Dual Locations – Regional Offices */}
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
                      <a href="tel:+26371436628" className="call-link">
                        Call +263 71 436 6228
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
                      <a href="tel:+26771852254" className="call-link">
                        Call +267 71 852 254
                      </a>
                      <a
                        href="https://wa.me/2677844462 "
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

            {/* Corporate Headquarters (existing, enhanced) 
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
            </div>*/}
          </div>

          {/* RIGHT COLUMN – Contact Form */}
          <div className="col-6 contact-right">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  className="form-control"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option>Residential Construction</option>
                  <option>Commercial Development</option>
                  <option>Infrastructure/Roads</option>
                  <option>Lighting Installation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Scope / Location</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn" style={{ width: '100%' }}>
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}