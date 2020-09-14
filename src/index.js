module.exports = function towelSort(matrix) {
  let res = [];

  if (!Array.isArray(matrix) || !matrix.length) {
    return res;
  }

  matrix.forEach((el, ind) => {
    res.push(...(ind % 2 === 0 ? el : el.reverse()));
  });

  return res;
};
