import React, { memo } from 'react';
import PropTypes from 'prop-types';

function SearchResult({ weatherInfo, clearResult }) {
  console.log('SearchResult render');

  if (Object.keys(weatherInfo).length !== 0) {
    return (
      <>
        <div className="weatherCard">
          <div className="currentTemp">
            <span className="temp">{weatherInfo.temp_c}&deg;C</span>
            <span className="location">{weatherInfo.city}</span>
          </div>
          <div className="currentWeather">
            <span className="conditions">
              <img
                className="conditions_img"
                src={weatherInfo.icon}
                alt="icon"
              />
              <span className="description">{weatherInfo.condition}</span>
            </span>
            <div className="info">
              <span className="rain">{weatherInfo.humidity} MM</span>
              <span className="wind">{weatherInfo.wind_kph} MPH</span>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="weatherCard__close"
          onClick={clearResult}
        >
          Close
        </button>
      </>
    );
  }
  return null;
}

SearchResult.propTypes = {
  weatherInfo: PropTypes.exact({
    city: PropTypes.string,
    temp_c: PropTypes.number,
    temp_f: PropTypes.number,
    condition: PropTypes.string,
    icon: PropTypes.string,
    wind_kph: PropTypes.number,
    wind_mph: PropTypes.number,
    wind_dir: PropTypes.string,
    humidity: PropTypes.number,
    cloud: PropTypes.number,
  }).isRequired,
  clearResult: PropTypes.func.isRequired,
};

export default memo(SearchResult);
