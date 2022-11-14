// @ts-check

/**
 * Data class for the wind portion of a weather report.
 */
class Wind {
  /** @type {number} */
  speed;

  /** @type {number | null} */
  gusts;

  /**
   * @param {number} speed
   * @param {number | undefined} [gusts]
   */
  constructor(speed, gusts) {
    this.speed = speed;
    this.gusts = typeof gusts === 'number' ? gusts : null;
  }
}

export default Wind;
