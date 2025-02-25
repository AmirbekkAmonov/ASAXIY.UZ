import React, { useState } from "react";
import "@/styles/main.scss";
import { useTranslation } from "react-i18next";

function Filter({ onFilterChange }) {
  const {t, i18n} = useTranslation()
  const [filters, setFilters] = useState({
    name: "all",
    price: "all",
    rating: "all",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters); 
  };

  const clearFilters = () => {
    const resetFilters = { name: "all", price: "all", rating: "all" };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="filter">
      <div className="filter-content">
        <div className="filter-item">
          <p>{t('filter.Filter')}</p>
          <select name="name" value={filters.name} onChange={handleChange}>
            <option value="all">{t('filter.All')}</option>
            <option value="a-z">{t('filter.A-Z')}</option>
            <option value="z-a">{t('filter.Z-A')}</option>
          </select>
        </div>
        <div className="filter-item">
          <p>{t('filter.Price')}</p>
          <select name="price" value={filters.price} onChange={handleChange}>
            <option value="all">{t('filter.All')}</option>
            <option value="low-high">{t('filter.Price_low')}</option>
            <option value="high-low">{t('filter.Price_high')}</option>
          </select>
        </div>
        <div className="filter-item">
          <p>{t('filter.Rating')}</p>
          <select name="rating" value={filters.rating} onChange={handleChange}>
            <option value="all">{t('filter.All')}</option>
            <option value="asc">{t('filter.Rating_asc')}</option>
            <option value="desc">{t('filter.Rating_desc')}</option>
          </select>
        </div>
      </div>
      <button type="button" onClick={clearFilters}>
        <img src="./assets/icons/brush.svg" alt="Clear" />
        <span className="clear">{t('filter.Span')}</span>
      </button>
    </div>
  );
}

export default Filter;
