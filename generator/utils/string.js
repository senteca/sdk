const capitalize = (str) => str.replace(/^./, (x) => x.toUpperCase());
const kebabToCamel = (str) => str.replace(/-./g, (x) => x.toUpperCase()[1]);
const kebabToPascal = (str) => capitalize(kebabToCamel(str));

module.exports = {
  capitalize,
  kebabToCamel,
  kebabToPascal,
};
