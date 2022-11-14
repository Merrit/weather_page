// @ts-check

// I wish I were an extension method.. ¯\_(ツ)_/¯
/**
 * Returns whatever occurs most frequently in the provided array.
 *
 * @param {array} array
 */
function getMostOccurrences(array) {
  return array
    .sort(
      (a, b) =>
        array.filter((e) => e === a).length -
        array.filter((e) => e === b).length,
    )
    .pop();
}

export default getMostOccurrences;
