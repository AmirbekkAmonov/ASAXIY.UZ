import React, { useState } from "react";
import "@/styles/main.scss";

function Filter({ onFilterChange }) {
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
          <p>Nomi bo'yicha</p>
          <select name="name" value={filters.name} onChange={handleChange}>
            <option value="all">Barchasi</option>
            <option value="a-z">A - Z gacha</option>
            <option value="z-a">Z - A gacha</option>
          </select>
        </div>
        <div className="filter-item">
          <p>Narxi bo'yicha</p>
          <select name="price" value={filters.price} onChange={handleChange}>
            <option value="all">Barchasi</option>
            <option value="low-high">Eng arzoni</option>
            <option value="high-low">Eng qimmat</option>
          </select>
        </div>
        <div className="filter-item">
          <p>Reyting bo'yicha</p>
          <select name="rating" value={filters.rating} onChange={handleChange}>
            <option value="all">Barchasi</option>
            <option value="asc">O'sish tartibida</option>
            <option value="desc">Kamayish tartibida</option>
          </select>
        </div>
      </div>
      <button type="button" onClick={clearFilters}>
        <img src="./assets/icons/brush.svg" alt="Clear" />
        <span className="clear">Tozalash</span>
      </button>
    </div>
  );
}

export default Filter;
