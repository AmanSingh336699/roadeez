import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CATEGORIES, BRANDS, PRODUCTS, TESTIMONIALS } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import './Home.css';

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState(BRANDS[0]);
  const navigate = useNavigate();

  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 4);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="badge badge-primary hero-pill">
                ⚡ Premium Two-Wheeler Accessories Brand
              </span>
              <h1 className="hero-title">
                ENGINEERED FOR THE <span>ROAD AHEAD.</span>
              </h1>
              <p className="hero-subtitle">
                Upgrade your ride with ROADEEZ OEM-fit headlights, sequential indicators, impact-resistant mudguards, and body panels. Precision built for Hero, Honda, TVS, Bajaj, and Yamaha.
              </p>
              
              <div className="hero-actions">
                <Link to="/products" className="btn btn-primary btn-lg">
                  Explore Product Catalog
                </Link>
                <Link to="/contact" className="btn btn-outline btn-lg">
                  Bulk Enquiry / Dealers
                </Link>
              </div>

              <div className="hero-stats-row">
                <div className="stat-item">
                  <span className="stat-num">50,000+</span>
                  <span className="stat-label">Happy Riders</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">100%</span>
                  <span className="stat-label">OEM Precision Fit</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">24 HR</span>
                  <span className="stat-label">Express Dispatch</span>
                </div>
              </div>
            </div>

            <div className="hero-graphic-card">
              <div className="hero-image-wrap">
                <img 
                  src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80" 
                  alt="ROADEEZ Motorbike Accessories Showcase" 
                />
              </div>
              <div className="hero-floating-badge">
                <div className="floating-icon">🛡️</div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800 }}>OEM Fitment Guarantee</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Direct Bolt-on Installation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Showcase Section */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <span className="badge badge-primary">Catalog Overview</span>
            <h2 className="section-title">Explore Accessory Categories</h2>
            <p className="section-subtitle">High performance lighting and durable body parts custom fitted for Indian road conditions.</p>
          </div>

          <div className="grid-3">
            {CATEGORIES.map((cat) => (
              <div 
                key={cat.id} 
                className="cat-card"
                onClick={() => navigate(`/products?category=${cat.id}`)}
              >
                <div className="cat-card-icon">
                  {cat.id === 'headlight' && '💡'}
                  {cat.id === 'indicator' && '⚡'}
                  {cat.id === 'mud-guard' && '🛡️'}
                  {cat.id === 'side-panel' && '⚙️'}
                  {cat.id === 'tail-guard' && '🚨'}
                </div>
                <h3 className="cat-card-title">{cat.name}</h3>
                <p className="cat-card-desc">{cat.description}</p>
                <div className="cat-card-link">
                  Browse {cat.name} Range →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Compatibility Interactive Section */}
      <section className="section" style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header-center">
            <span className="badge badge-amber">Brand Navigation</span>
            <h2 className="section-title">Select Your Bike Brand</h2>
            <p className="section-subtitle">Click on your bike manufacturer to quickly find compatible spare parts.</p>
          </div>

          {/* Brand Selector Pills */}
          <div className="brand-strip">
            {BRANDS.map((brand) => (
              <button
                key={brand.id}
                className={`brand-pill ${selectedBrand.id === brand.id ? 'active' : ''}`}
                onClick={() => setSelectedBrand(brand)}
              >
                <span>{brand.logo}</span>
                <span>{brand.name}</span>
              </button>
            ))}
          </div>

          {/* Compatible Models Box */}
          <div className="brand-models-box">
            <h3 className="brand-models-title">
              Top Compatible Models for {selectedBrand.name}:
            </h3>
            <div className="model-chips">
              {selectedBrand.models.map((model, idx) => (
                <div 
                  key={idx} 
                  className="model-chip"
                  onClick={() => navigate(`/products?brand=${selectedBrand.id}`)}
                >
                  {model}
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1.75rem' }}>
              <Link to={`/products?brand=${selectedBrand.id}`} className="btn btn-primary btn-sm">
                View All {selectedBrand.name} Accessories →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge badge-primary">Top Sellers</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Featured Products</h2>
            </div>
            <Link to="/products" className="btn btn-outline btn-sm">
              View Entire Catalog ({PRODUCTS.length} Items) →
            </Link>
          </div>

          <div className="grid-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ROADEEZ / Value Proposition */}
      <section className="section" style={{ backgroundColor: '#090d16', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header-center">
            <span className="badge badge-success">The ROADEEZ Advantage</span>
            <h2 className="section-title">Built for Performance & Durability</h2>
            <p className="section-subtitle">Why thousands of mechanics, riders, and retailers trust ROADEEZ spare parts.</p>
          </div>

          <div className="grid-4">
            <div className="usp-card">
              <div className="usp-icon">🎯</div>
              <h3 className="usp-title">100% OEM Fitment</h3>
              <p className="usp-desc">Direct factory dimensions and bolt placement for effortless DIY or workshop installation.</p>
            </div>

            <div className="usp-card">
              <div className="usp-icon">🛡️</div>
              <h3 className="usp-title">Impact-Proof Build</h3>
              <p className="usp-desc">Polycarbonate lenses and virgin ABS plastics designed to withstand harsh Indian road bumps.</p>
            </div>

            <div className="usp-card">
              <div className="usp-icon">🚚</div>
              <h3 className="usp-title">Express Shipping</h3>
              <p className="usp-desc">Orders dispatched within 24 hours with protective foam padding to prevent transport damage.</p>
            </div>

            <div className="usp-card">
              <div className="usp-icon">🔄</div>
              <h3 className="usp-title">Easy Replacement</h3>
              <p className="usp-desc">Hassle-free 7-day replacement policy and dedicated technical phone support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <span className="badge badge-amber">Rider Feedback</span>
            <h2 className="section-title">Loved by Riders Across India</h2>
            <p className="section-subtitle">See what fellow motorcyclists have to say about ROADEEZ upgrades.</p>
          </div>

          <div className="grid-3">
            {TESTIMONIALS.map((test) => (
              <div key={test.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {'★'.repeat(test.rating)}
                </div>
                <p className="testimonial-text">"{test.comment}"</p>
                <div className="testimonial-author">
                  <img src={test.avatar} alt={test.name} className="author-avatar" />
                  <div className="author-info">
                    <h4>{test.name}</h4>
                    <p>{test.role} • {test.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #991b1b 100%)', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>
            Ready to Upgrade Your Two-Wheeler?
          </h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem auto', opacity: 0.9 }}>
            Browse our complete catalog of headlights, indicators, mudguards, side panels, and tail guards now.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn btn-secondary btn-lg" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>
              Shop All Products
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg" style={{ borderColor: '#ffffff', color: '#ffffff' }}>
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
