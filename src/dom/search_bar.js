// @ts-check

// eslint-disable-next-line no-unused-vars
import WeatherService from '../weather_service/weather_service';
import DOM from './dom';

/**
 * Manages the search bar that allows the user to search for a new location.
 */
class SearchBar {
  /**
   * The input element for typing search locations.
   *
   * @type {HTMLInputElement}
   */
  #searchBarElement;

  /**
   * The button on the right of the input to submit a search.
   *
   * @type {HTMLButtonElement}
   */
  #searchButtonElement;

  /**
   * Error displayed under search for failure.
   *
   * @type {HTMLDivElement}
   */
  #searchErrorElement;

  /**
   * The form handling the search field.
   *
   * @type {HTMLFormElement}
   */
  #searchFormElement;

  /** @type {WeatherService} */
  #weatherService;

  /**
   * @param {string} initialLocationName
   * @param {WeatherService} weatherService
   */
  constructor(initialLocationName, weatherService) {
    this.#searchBarElement = /** @type {HTMLInputElement} */ (
      document.getElementById('search-bar')
    );
    this.updateLocationName(initialLocationName);
    this.#searchButtonElement = /** @type {HTMLButtonElement} */ (
      document.getElementById('search-button')
    );
    this.#searchErrorElement = /** @type {HTMLDivElement} */ (
      document.getElementById('search-error')
    );
    this.#searchFormElement = /** @type {HTMLFormElement} */ (
      document.getElementById('search-form')
    );
    this.#weatherService = weatherService;

    this.#attachListeners();
  }

  /**
   * Attach listeners for submit & clicking search button.
   */
  #attachListeners() {
    this.#searchFormElement.onsubmit = (event) => {
      this.#search();
      event.preventDefault();
      return false;
    };

    this.#searchButtonElement.onclick = () => this.#search();
  }

  /**
   * Update the location name displayed inside the search box.
   *
   * @param {string | null} name
   */
  updateLocationName(name) {
    this.#searchBarElement.placeholder = name ?? '';
  }

  /**
   * Attempt to get new weather data for the search location.
   */
  async #search() {
    const { value: location } = this.#searchBarElement;
    const weatherData = await this.#weatherService.getCurrentWeather(location);
    const gotWeatherData = weatherData !== null;
    this.#searchErrorElement.innerHTML = gotWeatherData
      ? '<br />'
      : 'Not found';
    if (!gotWeatherData) return;

    const forecastData = await this.#weatherService.getForecast(location);
    const gotForecastData = forecastData !== null;
    if (!gotForecastData) return;

    DOM.instance.loadNewWeatherData(weatherData, forecastData);
    this.updateLocationName(weatherData.locationName);
  }
}

export default SearchBar;
