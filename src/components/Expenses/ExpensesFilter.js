import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({
  selected,
  onChangeFilter
}) => {
  const currentYear = new Date().getFullYear();
  const years = [1, 0, -1, -2, -3].map(offset => currentYear + offset)

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={(event) => onChangeFilter(event.target.value)}>
          {years.map((year, i) => <option key={i} value={year}>{year}</option>)}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;