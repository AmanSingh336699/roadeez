import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="badge badge-primary" style={{ marginBottom: '1rem' }}>Our Heritage & Mission</span>
              <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>
                Crafting World-Class Two-Wheeler Accessories.
              </h1>
              <p className="about-lead">
                Founded with a passion for motorcycling perfection, <strong>ROADEEZ</strong> is an Indian automotive brand specializing in high-performance lighting, unbreakable mudguards, aerodynamic fairings, and precision replacement panels.
              </p>
              <p style={{ color: 'var(--color-text-subtle)', lineHeight: 1.6, marginBottom: '2rem' }}>
                Every product engineered under the ROADEEZ label undergoes rigorous vibration testing, optical alignment, and weatherproofing to guarantee seamless compatibility with Hero, Honda, TVS, Bajaj, and Yamaha two-wheelers.
              </p>
              <Link to="/products" className="btn btn-primary btn-lg">
                Explore Accessories Catalog
              </Link>
            </div>

            <div className="about-img-box">
              <img 
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80" 
                alt="ROADEEZ Automotive Design & Testing Facility" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values & Pillars */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <span className="badge badge-amber">Core Engineering Pillars</span>
            <h2 className="section-title">The Standard of Excellence</h2>
            <p className="section-subtitle">How we maintain zero-defect quality across all spare parts.</p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-card-icon">🔬</div>
              <h3>R&D Precision 3D Scanning</h3>
              <p>We 3D-scan original vehicle frames to ensure our replacement headlights and side cowls match factory mounting holes within 0.1mm tolerance.</p>
            </div>

            <div className="value-card">
              <div className="value-card-icon">🧪</div>
              <h3>Vibration & Impact Testing</h3>
              <p>Tested over simulated Indian rough-road conditions to ensure zero housing cracking, lens detachment, or electrical flickering.</p>
            </div>

            <div className="value-card">
              <div className="value-card-icon">☀️</div>
              <h3>UV & Weather Protection</h3>
              <p>Special anti-yellowing polycarbonate coatings and high-grade acrylic resins preserve crystal transparency even after years under blazing sun.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Numbers Section */}
      <section className="section" style={{ backgroundColor: '#070a12', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-success" style={{ marginBottom: '1rem' }}>Impact & Reach</span>
          <h2 className="section-title">Trusted Pan-India Network</h2>

          <div className="grid-4" style={{ marginTop: '3rem' }}>
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '0.4rem' }}>50,000+</div>
              <div style={{ fontWeight: 700, fontSize: '1rem' }}>Active Riders</div>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '0.4rem' }}>500+</div>
              <div style={{ fontWeight: 700, fontSize: '1rem' }}>Retail Workshop Outlets</div>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '0.4rem' }}>99.8%</div>
              <div style={{ fontWeight: 700, fontSize: '1rem' }}>Fitment Accuracy</div>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '0.4rem' }}>28</div>
              <div style={{ fontWeight: 700, fontSize: '1rem' }}>States Covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
