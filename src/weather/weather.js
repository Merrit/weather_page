/* eslint-disable prefer-destructuring */
// @ts-check

import Temperature from './temperature';
import Wind from './wind';

/**
 * The weekday names, since the API returns the day of the week as an int - this
 * maps those ints to the appropriate string representation. Eg [0] = 'Sun'.
 */
const kWeekDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * Data class representing a weather report.
 */
class Weather {
  /**
   * The day of the week, eg 'Sun', 'Mon', etc.
   *
   * Only populated for daily forecast.
   *
   * @type {string}
   */
  day;

  /**
   * Description of the weather, eg 'Broken clouds', 'Thunder storms', etc.
   *
   * @type {string}
   */
  description;

  /** @type {number} */
  humidity;

  /**
   * The icon associated with this weather report, eg clouds, sun, etc.
   *
   * @type {string}
   */
  icon;

  /**
   * The name of the location for the given weather report, eg 'Ottawa, 'London'
   *
   * @type {string}
   */
  locationName;

  /** @type {Temperature} */
  temperature;

  /** @type {Wind} */
  wind;

  /**
   * @param {string} day
   * @param {string} description
   * @param {number} humidity
   * @param {string} icon
   * @param {string} locationName
   * @param {Temperature} temperature
   * @param {Wind} wind
   */
  constructor(
    day,
    description,
    humidity,
    icon,
    locationName,
    temperature,
    wind,
  ) {
    this.day = day;
    this.description = description;
    this.humidity = humidity;
    this.icon = icon;
    this.locationName = locationName;
    this.temperature = temperature;
    this.wind = wind;
  }

  /**
   * Create an instance from the provided [json].
   *
   * @param {object} json
   */
  static fromJson(json) {
    let day;
    if (json.dt_txt) {
      const date = new Date(json.dt_txt);
      day = kWeekDayNames[date.getDay()];
    }
    const description = json.weather[0].description;
    const humidity = json.main.humidity;
    const icon = json.weather[0].icon;
    const locationName = json.name;
    const temperature = new Temperature(
      json.main.temp,
      json.main.feels_like,
      json.main.temp_max,
      json.main.temp_min,
    );
    const wind = new Wind(json.wind.speed, json.wind.gust);

    return new Weather(
      day ?? '',
      description,
      humidity,
      icon,
      locationName,
      temperature,
      wind,
    );
  }
}

export default Weather;
