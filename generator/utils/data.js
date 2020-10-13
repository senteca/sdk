const getIn = (data, path, defaultValue) => {
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
  return value || defaultValue;
};

module.exports = {
  getIn,
};
