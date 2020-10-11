const getIn = (data, path) => {
  if (!data || !path) {
    return data;
  }
  let value = data;
  const pathArray = path.split(".");
  for (let pathPart of pathArray) {
    value = value[pathPart];
    if (value === undefined || value === null) {
      break;
    }
  }
  return value;
};

module.exports = {
  getIn,
};
