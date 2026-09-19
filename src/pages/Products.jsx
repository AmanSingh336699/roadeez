import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES, BRANDS } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import './Products.css';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get('category') || 'all';
  const selectedBrand = searchParams.get('brand') || 'all';
  const searchQuery = searchParams.get('q') || '';
  const sortBy = searchParams.get('sort') || 'featured';

  // Helper to update query params cleanly
  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== 'all') {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearAllFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Brand match
      if (selectedBrand !== 'all' && item.brand !== selectedBrand) {
        return false;
      }
      // Search text match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesModel = item.compatibleModel.toLowerCase().includes(query);
        const matchesBrand = item.brand.toLowerCase().includes(query);
        if (!matchesName && !matchesModel && !matchesBrand) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // default featured order
    });
  }, [selectedCategory, selectedBrand, searchQuery, sortBy]);

  return (
    <div className="products-page">
      <div className="container">
        {/* Page Title Header */}
        <div className="products-page-header">
          <span className="badge badge-primary">Catalog</span>
          <h1 className="section-title">Two-Wheeler Accessories Catalog</h1>
          <p className="section-subtitle">
            Filter by component category or bike manufacturer to find OEM precision-engineered replacement parts.
          </p>
        </div>

        <div className="products-layout">
          {/* Left Sidebar Filters */}
          <aside className="filters-sidebar">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Filter Parts</h3>
              {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery !== '') && (
                <button 
                  onClick={clearAllFilters} 
                  style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer' }}
                >
                  Reset All
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="filter-group">
              <div className="filter-title">Category</div>
              <div className="filter-options">
                <button
                  className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                  onClick={() => updateFilter('category', 'all')}
                >
                  <span>All Categories</span>
                  <span className="filter-count">{PRODUCTS.length}</span>
                </button>
                {CATEGORIES.map((cat) => {
                  const count = PRODUCTS.filter(p => p.category === cat.id).length;
                  return (
                    <button
                      key={cat.id}
                      className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                      onClick={() => updateFilter('category', cat.id)}
                    >
                      <span>{cat.name}</span>
                      <span className="filter-count">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Brand Filter */}
            <div className="filter-group">
              <div className="filter-title">Bike Brand</div>
              <div className="filter-options">
                <button
                  className={`filter-btn ${selectedBrand === 'all' ? 'active' : ''}`}
                  onClick={() => updateFilter('brand', 'all')}
                >
                  <span>All Bike Brands</span>
                  <span className="filter-count">{PRODUCTS.length}</span>
                </button>
                {BRANDS.map((b) => {
                  const count = PRODUCTS.filter(p => p.brand === b.id).length;
                  return (
                    <button
                      key={b.id}
                      className={`filter-btn ${selectedBrand === b.id ? 'active' : ''}`}
                      onClick={() => updateFilter('brand', b.id)}
                    >
                      <span>{b.logo} {b.name}</span>
                      <span className="filter-count">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Right Main Catalog Content */}
          <main className="catalog-main">
            {/* Search and Sort Control Bar */}
            <div className="catalog-controls">
              <div className="search-box">
                <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search by part name or bike model..."
                  value={searchQuery}
                  onChange={(e) => updateFilter('q', e.target.value)}
                />
              </div>

              <div className="sort-box">
                <label htmlFor="sort-select">Sort By:</label>
                <select
                  id="sort-select"
                  className="sort-select"
                  value={sortBy}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                >
                  <option value="featured">Featured / Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Active Filters Display */}
            {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery !== '') && (
              <div className="active-filters-bar">
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-subtle)' }}>Active Filters:</span>
                {selectedCategory !== 'all' && (
                  <span className="chip">
                    Category: {CATEGORIES.find(c => c.id === selectedCategory)?.name}
                    <span className="chip-remove" onClick={() => updateFilter('category', 'all')}>×</span>
                  </span>
                )}
                {selectedBrand !== 'all' && (
                  <span className="chip">
                    Brand: {BRANDS.find(b => b.id === selectedBrand)?.name}
                    <span className="chip-remove" onClick={() => updateFilter('brand', 'all')}>×</span>
                  </span>
                )}
                {searchQuery !== '' && (
                  <span className="chip">
                    Query: "{searchQuery}"
                    <span className="chip-remove" onClick={() => updateFilter('q', '')}>×</span>
                  </span>
                )}
              </div>
            )}

            {/* Products Counter */}
            <div style={{ marginBottom: '1.25rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
              Showing <strong>{filteredProducts.length}</strong> matching products
            </div>

            {/* Products Grid or Empty State */}
            {filteredProducts.length > 0 ? (
              <div className="grid-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="empty-results">
                <div className="empty-icon">🔍</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No Products Found</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  No accessories match your current selection. Try changing category or clearing active search filters.
                </p>
                <button className="btn btn-primary btn-sm" onClick={clearAllFilters}>
                  Clear All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
