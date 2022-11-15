// @ts-check

import Weather from '../weather/weather';
import Forecast from '../weather/forecast';

/**
 * Provides an interface to get weather data.
 */
class WeatherService {
  // Free API key for Open Weather Map, does not require protection.
  // https://openweathermap.org/
  #kApiKey = '9566c510f80fe0553c609abe9c13319a';

  #units = 'metric';

  /**
   * Fetches weather data for the provided [location].
   *
   * @param {string} location
   * @return {Promise<Weather | null>}
   */
  async getCurrentWeather(location) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${
        this.#kApiKey
      }&units=${this.#units}`,
    );

    if (response.status === 404) return null;

    const data = await response.json();
    const weather = Weather.fromJson(data);
    return weather;
  }

  async getForecast(location) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${
        this.#kApiKey
      }&units=metric`,
    );
    const data = await response.json();
    const forecast = new Forecast(data);
    return forecast;
  }
}

export default WeatherService;
