import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CATEGORIES, BRANDS } from '../data/mockData';
import './Header.css';

export default function Header() {
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(true);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMegaOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleBrandClick = (categoryId, brandId) => {
    setIsMegaOpen(false);
    setMobileMenuOpen(false);
    navigate(`/products?category=${categoryId}&brand=${brandId}`);
  };

  const handleCategoryClick = (categoryId) => {
    setIsMegaOpen(false);
    setMobileMenuOpen(false);
    navigate(`/products?category=${categoryId}`);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
          <div className="logo-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <div className="brand-text">
            ROAD<span>EEZ</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>

          {/* Products Mega Dropdown (Inspired by Reference UI) */}
          <div 
            className="products-menu-wrapper"
            ref={dropdownRef}
            onMouseEnter={() => setIsMegaOpen(true)}
            onMouseLeave={() => setIsMegaOpen(false)}
          >
            <NavLink 
              to="/products" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={(e) => {
                // If clicked directly, toggle menu or let navigation proceed
              }}
            >
              Products
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </NavLink>

            {isMegaOpen && (
              <div className="mega-menu">
                {/* Left Column: Categories List */}
                <div className="mega-categories">
                  {CATEGORIES.map((cat) => (
                    <div
                      key={cat.id}
                      className={`mega-category-item ${activeCategory.id === cat.id ? 'active' : ''}`}
                      onMouseEnter={() => setActiveCategory(cat)}
                      onClick={() => handleCategoryClick(cat.id)}
                    >
                      <span>{cat.name}</span>
                      <span className="arrow">►</span>
                    </div>
                  ))}
                </div>

                {/* Right Column: Compatible Brands for Hovered Category */}
                <div className="mega-brands">
                  <div className="mega-brands-header">
                    Compatible Brands for {activeCategory.name}
                  </div>
                  {BRANDS.map((brand) => (
                    <div
                      key={brand.id}
                      className="mega-brand-item"
                      onClick={() => handleBrandClick(activeCategory.id, brand.id)}
                    >
                      <span>{brand.logo}</span>
                      <span>{brand.name}</span>
                    </div>
                  ))}
                  <Link 
                    to={`/products?category=${activeCategory.id}`} 
                    className="mega-view-all"
                    onClick={() => setIsMegaOpen(false)}
                  >
                    View All {activeCategory.name} Parts →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About Us
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact Us
          </NavLink>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <Link to="/products" className="icon-btn" title="Search Products">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </Link>

          <button 
            className="mobile-toggle icon-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-logo">
                <div className="logo-badge">⚡</div>
                <div className="brand-text">ROAD<span>EEZ</span></div>
              </div>
              <button className="icon-btn" onClick={() => setMobileMenuOpen(false)}>
                ✕
              </button>
            </div>

            <div className="mobile-nav-list">
              <NavLink to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Home
              </NavLink>

              {/* Accordion for Products */}
              <div>
                <div 
                  className="mobile-accordion-title"
                  onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
                >
                  <span>Products</span>
                  <span>{mobileCategoriesOpen ? '▲' : '▼'}</span>
                </div>

                {mobileCategoriesOpen && (
                  <div className="mobile-category-list">
                    {CATEGORIES.map((cat) => (
                      <div key={cat.id}>
                        <div 
                          style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.9rem', cursor: 'pointer' }}
                          onClick={() => handleCategoryClick(cat.id)}
                        >
                          {cat.name}
                        </div>
                        <div className="mobile-brand-tags">
                          {BRANDS.map((b) => (
                            <span 
                              key={b.id} 
                              className="mobile-brand-chip"
                              onClick={() => handleBrandClick(cat.id, b.id)}
                            >
                              {b.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <NavLink to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </NavLink>

              <NavLink to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
