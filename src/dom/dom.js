// @ts-check

/* eslint-disable max-classes-per-file */

// eslint-disable-next-line no-unused-vars
import Forecast from '../weather/forecast';
// eslint-disable-next-line no-unused-vars
import Weather from '../weather/weather';

/**
 * Handles interfacing with the UI.
 */
class DOM {
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
   * Singleton instance access for the DOM.
   * @type {DOM}
   */
  static instance;

  /**
   * @param {Weather | null} initialWeatherData
   * @param {Forecast | null} initialForecastData
   */
  constructor(initialWeatherData, initialForecastData) {
    // Singleton class.
    if (typeof DOM.instance !== 'undefined') return;

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
    if (initialWeatherData === null || initialForecastData === null) {
      // Set message about no data or w/e.
      return;
    }

    this.loadNewWeatherData(initialWeatherData, initialForecastData);

    DOM.instance = this;
  }

  /**
   * Populate the DOM with the provided weather data.
   *
   * @param {Weather} weatherData
   * @param {Forecast} forecastData
   */
  loadNewWeatherData(weatherData, forecastData) {
    this.updateTemperature(weatherData.temperature.actual);
    this.updateFeelsLike(weatherData.temperature.feelsLike);
    this.updateWeatherIcon(weatherData.icon);
    this.updateDescription(weatherData.description);
    this.updateForecastArea(forecastData);
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
    // Reset forecast widgets so it can be populated with new data.
    this.#forecastAreaElement.replaceChildren();

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
