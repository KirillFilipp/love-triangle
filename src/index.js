/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let i = 0; i < preferences.length; i++) {
    let k = preferences[i];
    let n = preferences[k - 1];
    let t = preferences[n - 1];
    if (i === t - 1 && k != t) {
      count++;
    }
  }
  return count / 3;
  // your implementation
};
