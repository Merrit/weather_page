// @ts-check

/**
 * Data class for the temperature portion of a weather report.
 */
class Temperature {
  /**
   * The actual temperature not counting conditions like wind, humidity, etc.
   *
   * @type {number}
   */
  actual;

  /**
   * The perceived temperature counting conditions like wind, humidity, etc.
   *
   * @type {number}
   */
  feelsLike;

  /**
   * The highest expected temperature for the day.
   *
   * @type {number}
   */
  high;

  /**
   * The lowest expected temperature for the day.
   *
   * @type {number}
   */
  low;

  /**
   * @param {number} actual
   * @param {number} feelsLike
   * @param {number} high
   * @param {number} low
   */
  constructor(actual, feelsLike, high, low) {
    this.actual = Math.round(actual);
    this.feelsLike = Math.round(feelsLike);
    this.high = Math.round(high);
    this.low = Math.round(low);
  }
}

export default Temperature;
