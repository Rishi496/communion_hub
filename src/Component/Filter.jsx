import React from "react";

const Filter = ({ currentFilter, onFilterChange }) => {
  const categories = ["All", "Religious", "Cultural", "Social"];

  return (
    <div className="filter-container">
      <label>Filter by: </label>
      <select
        value={currentFilter}
        onChange={(e) => onFilterChange(e.target.value)}
        className="filter-select"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
