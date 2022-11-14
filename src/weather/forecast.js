/* eslint-disable no-param-reassign */
// @ts-check

import getAverage from '../helpers/average';
import getMostOccurrences from '../helpers/most_occurrences';
import Temperature from './temperature';
import Weather from './weather';
import Wind from './wind';

/**
 * Data class for a 5-day weather forecast.
 */
class Forecast {
  /**
   * @type {Weather[]}
   */
  days = [];

  #kDateRegex = /\d\d\d\d-\d\d-\d\d/;

  constructor(json) {
    let convertedDayChunks = /** @type {Weather[]} */ (
      json.list.map((day) => Weather.fromJson(day))
    );

    /** @type {Array<Array<Weather>>} */
    const dayArrays = [];

    // Add each chunk that is for the same day to an array inside [days] so that
    // at the end each unique day is contained in 1 array.
    while (convertedDayChunks.length !== 0) {
      const dayOfWeek = convertedDayChunks[0].day;
      dayArrays.push(
        convertedDayChunks.filter((dayChunk) => dayChunk.day === dayOfWeek),
      );
      convertedDayChunks = convertedDayChunks.filter(
        (dayChunk) => dayChunk.day !== dayOfWeek,
      );
    }

    dayArrays.forEach((dayArray) =>
      this.days.push(Forecast.weatherFromHourlySnapshots(dayArray)),
    );

    this.days.forEach((day) => {
      day.locationName = json.city.name;
    });
  }

  /**
   * Convert an array of [Weather] representing different times in a day into a
   * single day's [Weather].
   *
   * Necessary because Open Weather Map only provides forecast data for free
   * accounts in 5-day, 3-hour increments rather than the expected daily
   * forcast.
   *
   * @param {Weather[]} dayChunks
   * @return {Weather}
   */
  static weatherFromHourlySnapshots(dayChunks) {
    // Create values for the single day weather.
    // eslint-disable-next-line prefer-destructuring
    const description = dayChunks[0].description;
    const humidity = Math.max(...dayChunks.map((day) => day.humidity));
    const icon = getMostOccurrences(dayChunks.map((day) => day.icon));

    const actualTemperature = getAverage(
      dayChunks.map((day) => day.temperature.actual),
    );
    const feelsLike = getAverage(
      dayChunks.map((day) => day.temperature.feelsLike),
    );
    const highTemperature = Math.max(
      ...dayChunks.map((day) => day.temperature.high),
    );
    const lowTemperature = Math.min(
      ...dayChunks.map((day) => day.temperature.low),
    );
    const temperature = new Temperature(
      actualTemperature,
      feelsLike,
      highTemperature,
      lowTemperature,
    );

    const windSpeed = getAverage(dayChunks.map((day) => day.wind.speed));
    const windGusts = getAverage(dayChunks.map((day) => day.wind.gusts ?? 0));
    const wind = new Wind(windSpeed, windGusts);

    const weather = new Weather(
      dayChunks[0].day,
      description,
      humidity,
      icon,
      '',
      temperature,
      wind,
    );

    return weather;
  }
}

export default Forecast;
