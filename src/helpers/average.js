// @ts-check

// I wish I were an extension method.. ¯\_(ツ)_/¯
/**
 * Returns the average value of the provided array.
 *
 * @param {number[]} array
 */
function getAverage(array) {
  const sum = array.reduce((a, b) => a + b, 0);
  const average = sum / array.length;
  return average;
}

export default getAverage;
