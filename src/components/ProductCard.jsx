import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="product-card">
      <div className="product-card-image-wrap">
        {product.badge && (
          <span className="badge badge-primary product-badge">
            {product.badge}
          </span>
        )}
        <span className="product-brand-tag">
          {product.brand}
        </span>
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-card-image"
          loading="lazy" 
        />
      </div>

      <div className="product-card-content">
        <div className="product-fitment">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          Fits: {product.compatibleModel}
        </div>

        <h3 className="product-title">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>

        <div className="product-rating-row">
          <div className="star-rating">
            ★ {product.rating}
          </div>
          <span>({product.reviewsCount} reviews)</span>
        </div>

        <div className="product-price-row">
          <span className="current-price">₹{product.price}</span>
          {product.mrp && <span className="mrp-price">₹{product.mrp}</span>}
          {product.discount && <span className="discount-tag">{product.discount}</span>}
        </div>

        <div className="product-card-footer">
          <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">
            View Details & Specs
          </Link>
        </div>
      </div>
    </div>
  );
}
