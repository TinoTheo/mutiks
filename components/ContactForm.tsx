'use client';

import { useState, FormEvent } from 'react';

const WHATSAPP_BUSINESS_NUMBER = '263783372825';

export default function ContactForm() {
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

    const message = `Hello Mutiks Grassroots Investments,

Name: ${formData.name || '(not provided)'}
Phone: ${formData.phone || '(not provided)'}
Email: ${formData.email || '(not provided)'}
Project Type: ${formData.projectType}

Project Details:
${formData.message || '(no details)'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
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
  );
}