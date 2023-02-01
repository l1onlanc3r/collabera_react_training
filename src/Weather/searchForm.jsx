import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const SearchForm = forwardRef(({ searchCity }, ref) => {
  console.log('SearchForm render');
  return (
    <form className="weather__form search_form" onSubmit={searchCity}>
      <label htmlFor="search" className="search_form__label">
        Enter City
      </label>
      <div className="relative">
        <div className="search_form__icon">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          ref={ref}
          type="search"
          id="search"
          className="search_form__input"
          placeholder="Search"
        />
        <button type="submit" className="search_form__btn">
          Check Weather
        </button>
      </div>
    </form>
  );
});

SearchForm.propTypes = {
  searchCity: PropTypes.func.isRequired,
};

export default memo(SearchForm);
