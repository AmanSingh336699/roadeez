import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, BRANDS } from '../data/mockData';
import roadeezLogo from '../assets/roadeez.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand-logo">
              <img src={roadeezLogo} alt="ROADEEZ Logo" className="brand-logo-img" />
            </Link>
            <p>
              India's trusted destination for precision-engineered two-wheeler accessories, heavy-duty lighting, and OEM compatible spare parts.
            </p>
          </div>

          <div className="footer-col">
            <h4>Categories</h4>
            <ul className="footer-links">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/products?category=${cat.id}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Supported Brands</h4>
            <ul className="footer-links">
              {BRANDS.map((brand) => (
                <li key={brand.id}>
                  <Link to={`/products?brand=${brand.id}`}>{brand.name} Parts</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Rider Newsletter</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
              Subscribe for new product launches, maintenance tips, and exclusive discounts.
            </p>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to ROADEEZ!'); }}>
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder="Enter your email" 
                required 
              />
              <button type="submit" className="btn btn-primary btn-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} ROADEEZ Auto Accessories Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Support</Link>
            <span style={{ color: 'var(--color-text-subtle)' }}>100% OEM Compatibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
