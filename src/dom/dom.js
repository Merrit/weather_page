// @ts-check

// eslint-disable-next-line no-unused-vars
import Forecast from '../weather/forecast';
// eslint-disable-next-line no-unused-vars
import Weather from '../weather/weather';

/**
 * Handles interfacing with the UI.
 */
class DOM {
  /** @type {HTMLInputElement} */
  #searchBarElement;

  /** @type {HTMLDivElement} */
  #temperatureElement;

  /** @type {HTMLDivElement} */
  #feelsLikeElement;

  /** @type {HTMLImageElement} */
  #weatherIconElement;

  /** @type {HTMLDivElement} */
  #descriptionElement;

  /** @type {HTMLDivElement} */
  #forecastAreaElement;

  /**
   * @param {Weather} [initialWeatherData]
   * @param {Forecast} [initialForecastData]
   */
  constructor(initialWeatherData, initialForecastData) {
    this.#searchBarElement = /** @type {HTMLInputElement} */ (
      document.getElementById('search-bar')
    );
    this.#temperatureElement = /** @type {HTMLDivElement} */ (
      document.getElementById('temperature')
    );
    this.#feelsLikeElement = /** @type {HTMLDivElement} */ (
      document.getElementById('temperature-feels-like')
    );
    this.#weatherIconElement = /** @type {HTMLImageElement} */ (
      document.getElementById('weather-icon')
    );
    this.#descriptionElement = /** @type {HTMLDivElement} */ (
      document.getElementById('description')
    );
    this.#forecastAreaElement = /** @type {HTMLDivElement} */ (
      document.getElementById('forecast')
    );

    // If for some reason we didn't get initial data we will forego loading
    // weather data and display default placeholders.
    if (
      typeof initialWeatherData === 'undefined' ||
      typeof initialForecastData === 'undefined'
    ) {
      // Set message about no data or w/e.
      return;
    }

    this.updateLocationName(initialWeatherData.locationName);
    this.updateTemperature(initialWeatherData.temperature.actual);
    this.updateFeelsLike(initialWeatherData.temperature.feelsLike);
    this.updateWeatherIcon(initialWeatherData.icon);
    this.updateDescription(initialWeatherData.description);
    this.updateForecastArea(initialForecastData);
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
   * Update the main temperature display.
   *
   * @param {number | null} temperature
   */
  updateTemperature(temperature) {
    const temperatureString = temperature?.toString() ?? '__';
    this.#temperatureElement.textContent = `${temperatureString}°`;
  }

  /**
   * Update the "feels like" temperature in the main weather block.
   *
   * @param {number | null} feelsLike
   */
  updateFeelsLike(feelsLike) {
    const feelsLikeString = feelsLike?.toString() ?? '__';
    const newChild = document.createElement('div');
    newChild.textContent = `${feelsLikeString}°`;
    this.#feelsLikeElement.replaceChild(
      newChild,
      this.#feelsLikeElement.children[1],
    );
  }

  /**
   * Gets the URL for the icon associated with [iconId].
   *
   * @param {string} iconId
   */
  #getIconUrl(iconId) {
    return `http://openweathermap.org/img/wn/${iconId}@2x.png`;
  }

  /**
   * Update the displayed icon in the main weather block.
   *
   * @param {string} iconId
   */
  updateWeatherIcon(iconId) {
    // const iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
    // this.#weatherIconElement.src = iconUrl;
    this.#weatherIconElement.src = this.#getIconUrl(iconId);
  }

  /**
   * Update the weather description in the main weather block.
   *
   * @param {string} description
   */
  updateDescription(description) {
    const formattedDescription =
      description[0].toUpperCase() + description.slice(1);
    this.#descriptionElement.textContent = formattedDescription;
  }

  /**
   * Update the daily forecast block.
   *
   * @param {Forecast} forecast
   */
  updateForecastArea(forecast) {
    forecast.days.forEach((day) => {
      const forecastWidget = document.createElement('div');

      const dayElement = document.createElement('div');
      dayElement.textContent = day.day;
      forecastWidget.appendChild(dayElement);

      const iconElement = document.createElement('img');
      iconElement.src = this.#getIconUrl(day.icon);
      forecastWidget.appendChild(iconElement);

      const temperatureElement = document.createElement('div');
      temperatureElement.textContent = `${day.temperature.high}°`;
      forecastWidget.appendChild(temperatureElement);

      this.#forecastAreaElement.appendChild(forecastWidget);
    });
  }
}

export default DOM;
