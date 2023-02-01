import React, { createRef, PureComponent } from 'react';
import './weather.css';
import SearchForm from './searchForm';
import SearchResult from './searchResult';

export default class Weather extends PureComponent {
  state = {
    weatherInfo: {},
    error: null,
  };

  searchText = createRef();

  searchCity = async event => {
    try {
      event.preventDefault();

      const searchText = this.searchText.current.value;

      if (searchText.trim() === '') {
        alert('Please enter a city.');
      }

      console.log('searching: ', searchText);
      const url = `http://localhost:3000/weather?city=${searchText}`;

      const res = await fetch(url);
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json);
      }

      if (json.length === 0) {
        alert('City not found.');
        return;
      }

      this.searchText.current.value = '';
      this.setState({ weatherInfo: json[0] });
    } catch (error) {
      this.setState({ error });
    }
  };

  clearResult = () => {
    this.setState({ weatherInfo: {} });
  };

  render() {
    const { weatherInfo, error } = this.state;

    if (error) {
      return <h1>{error.message}</h1>;
    }

    return (
      <div className="weather">
        <div className="weather__container">
          <SearchForm searchCity={this.searchCity} ref={this.searchText} />
          <SearchResult
            weatherInfo={weatherInfo}
            clearResult={this.clearResult}
          />
        </div>
      </div>
    );
  }
}
