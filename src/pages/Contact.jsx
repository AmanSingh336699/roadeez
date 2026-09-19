import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { COMPANY_FAQS } from '../data/mockData';
import './Contact.css';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: '',
    category: 'general',
    message: initialProduct ? `Inquiry regarding: ${initialProduct}` : ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email address is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid 10-digit mobile number is required';
    if (!formData.message.trim()) errs.message = 'Message or query details required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      setErrors({});
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        model: '',
        category: 'general',
        message: ''
      });
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="products-page-header">
          <span className="badge badge-primary">Support & Inquiries</span>
          <h1 className="section-title">Contact ROADEEZ Team</h1>
          <p className="section-subtitle">
            Need fitment guidance for your bike, bulk dealership rates, or help with an order? We are here to assist.
          </p>
        </div>

        <div className="contact-grid">
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-details">
                <h4>Customer Support Helpline</h4>
                <p style={{ fontWeight: 700, color: 'var(--color-text-main)', fontSize: '1.05rem', margin: '0.2rem 0' }}>
                  +91 98765 43210 / 011-4567-8900
                </p>
                <p>Monday to Saturday: 9:00 AM – 7:00 PM IST</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div className="info-details">
                <h4>Email Support & Dealers</h4>
                <p style={{ color: 'var(--color-primary)', fontWeight: 700, margin: '0.2rem 0' }}>
                  support@roadeez.com / wholesale@roadeez.com
                </p>
                <p>Guaranteed response within 4 business hours</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h4>Headquarters & Central Hub</h4>
                <p style={{ color: 'var(--color-text-main)', margin: '0.2rem 0' }}>
                  ROADEEZ Auto Accessories Park, Plot 42, Mayapuri Industrial Area Phase II, New Delhi - 110064, India
                </p>
              </div>
            </div>

            <div className="info-card" style={{ background: 'linear-gradient(135deg, #141c2e 0%, #1e293b 100%)' }}>
              <div className="info-icon">🏭</div>
              <div className="info-details">
                <h4>Dealership & Bulk Wholesale</h4>
                <p>Are you a spare parts shop owner or workshop mechanic? Contact us for special bulk margin pricing & free display stands.</p>
              </div>
            </div>
          </div>

          <div className="contact-form-box">
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>Send Us a Message</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Fill out the form below and our technical support representative will reach out.
            </p>

            {submitted && (
              <div style={{ padding: '1.25rem', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid var(--color-success)', borderRadius: 'var(--radius-md)', color: 'var(--color-success)', marginBottom: '1.5rem', fontWeight: 600 }}>
                ✓ Thank you! Your message has been received. Ticket ID #RDZ-{(Math.random()*90000+10000).toFixed(0)} generated.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="10 digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Your Bike Model & Year</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Hero Splendor 2021"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Inquiry Purpose</label>
                <select
                  className="form-select"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="general">General Fitment Question</option>
                  <option value="wholesale">Wholesale / Dealership Rates</option>
                  <option value="order">Order Tracking & Delivery</option>
                  <option value="warranty">Warranty & Replacement</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Your Message / Part Requirement *</label>
                <textarea
                  className="form-textarea"
                  rows="4"
                  placeholder="Tell us what part you are looking for..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '0.5rem' }}>
                Submit Message →
              </button>
            </form>
          </div>
        </div>

        <section className="faq-section">
          <div className="section-header-center">
            <span className="badge badge-amber">Help Center</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Quick answers to common questions regarding compatibility, shipping, and warranty.</p>
          </div>

          <div className="faq-accordion">
            {COMPANY_FAQS.map((faq, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <span style={{ color: 'var(--color-primary)' }}>{activeFaq === index ? '−' : '+'}</span>
                </div>
                {activeFaq === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
