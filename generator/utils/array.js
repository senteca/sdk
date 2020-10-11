const toArray = (arr) => {
  if (arr instanceof Array) {
    return arr;
  }
  if (arr === undefined) {
    return [];
  }
  return [arr];
};

module.exports = {
  toArray,
};
