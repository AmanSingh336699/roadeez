import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [selectedImg, setSelectedImg] = useState(null);
  const [enquirySuccess, setEnquirySuccess] = useState(false);

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <p style={{ color: 'var(--color-text-muted)', margin: '1rem 0 2rem 0' }}>
          The accessory product you are looking for does not exist or has been moved.
        </p>
        <Link to="/products" className="btn btn-primary">
          Return to Catalog
        </Link>
      </div>
    );
  }

  const categoryObj = CATEGORIES.find(c => c.id === product.category);
  const activeImage = selectedImg || product.image;

  // Related products from same category or brand
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand)
  ).slice(0, 3);

  const handleEnquiry = () => {
    setEnquirySuccess(true);
    setTimeout(() => setEnquirySuccess(false), 4000);
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <Link to={`/products?category=${product.category}`}>{categoryObj?.name || product.category}</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-text-main)', fontWeight: 600 }}>{product.name}</span>
        </div>

        {/* Main Grid */}
        <div className="detail-grid">
          {/* Left Column: Image Showcase */}
          <div className="gallery-col">
            <div className="gallery-main-wrap">
              <img src={activeImage} alt={product.name} className="gallery-main-img" />
              {product.badge && (
                <span className="badge badge-primary product-badge">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="gallery-thumbnails">
              <div 
                className={`thumb-item ${activeImage === product.image ? 'active' : ''}`}
                onClick={() => setSelectedImg(product.image)}
              >
                <img src={product.image} alt="Thumbnail 1" />
              </div>
              {/* Add secondary mock angles for visual fidelity */}
              <div 
                className={`thumb-item ${activeImage === 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=400&q=80' ? 'active' : ''}`}
                onClick={() => setSelectedImg('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=400&q=80')}
              >
                <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=400&q=80" alt="Thumbnail 2" />
              </div>
              <div 
                className={`thumb-item ${activeImage === 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=400&q=80' ? 'active' : ''}`}
                onClick={() => setSelectedImg('https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=400&q=80')}
              >
                <img src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=400&q=80" alt="Thumbnail 3" />
              </div>
            </div>
          </div>

          {/* Right Column: Product Info & Actions */}
          <div className="detail-info">
            <div className="detail-fitment-tag">
              ⚡ Guaranteed OEM Fitment for {product.compatibleModel} ({product.brand.toUpperCase()})
            </div>

            <h1 className="detail-title">{product.name}</h1>

            <div className="detail-rating-strip">
              <div className="star-rating">
                ★ {product.rating} / 5.0
              </div>
              <span style={{ color: 'var(--color-text-subtle)' }}>|</span>
              <span style={{ color: 'var(--color-text-muted)' }}>{product.reviewsCount} Customer Ratings</span>
              <span style={{ color: 'var(--color-text-subtle)' }}>|</span>
              <span className="badge badge-success">In Stock</span>
            </div>

            <div className="detail-price-box">
              <div>
                <span className="detail-current-price">₹{product.price}</span>
                {product.mrp && <span className="detail-mrp" style={{ marginLeft: '0.75rem' }}>₹{product.mrp}</span>}
              </div>
              {product.discount && (
                <span className="badge badge-primary" style={{ marginLeft: 'auto', fontSize: '0.85rem' }}>
                  Save {product.discount}
                </span>
              )}
            </div>

            <p className="detail-description">{product.description}</p>

            {/* Specifications Table */}
            <div className="specs-section">
              <h3 className="specs-title">Technical Specifications</h3>
              <table className="specs-table">
                <tbody>
                  {Object.entries(product.specs || {}).map(([key, val]) => (
                    <tr key={key}>
                      <td className="spec-key">{key}</td>
                      <td className="spec-val">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Key Features List */}
            {product.features && product.features.length > 0 && (
              <div style={{ marginBottom: '1.75rem' }}>
                <h3 className="specs-title">Key Highlights</h3>
                <ul className="features-list">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="feature-item">
                      <span>✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Bar */}
            <div className="detail-actions-row">
              <div className="qty-picker">
                <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
                <span className="qty-num">{qty}</span>
                <button className="qty-btn" onClick={() => setQty(qty + 1)}>+</button>
              </div>

              <button className="btn btn-primary btn-lg" style={{ flexGrow: 1 }} onClick={handleEnquiry}>
                ⚡ Instant Order / Enquiry
              </button>

              <button 
                className="btn btn-secondary btn-lg"
                onClick={() => navigate(`/contact?product=${encodeURIComponent(product.name)}`)}
              >
                Wholesale Inquiry
              </button>
            </div>

            {enquirySuccess && (
              <div style={{ marginTop: '1rem', padding: '0.85rem', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid var(--color-success)', color: 'var(--color-success)', borderRadius: 'var(--radius-sm)', fontWeight: 600, fontSize: '0.9rem', textAlign: 'center' }}>
                ✓ Product enquiry added! Our technical specialist will contact you shortly.
              </div>
            )}
          </div>
        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div style={{ paddingTop: '3rem', borderTop: '1px solid var(--color-border)' }}>
            <div style={{ marginBottom: '2rem' }}>
              <span className="badge badge-amber">Recommendations</span>
              <h2 className="section-title" style={{ fontSize: '1.75rem' }}>Similar Accessories for Your Ride</h2>
            </div>
            <div className="grid-3">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
