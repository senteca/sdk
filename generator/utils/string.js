const capitalize = (str) => str.replace(/^./, (x) => x.toUpperCase());
const kebabToCamel = (str) => str.replace(/-./g, (x) => x.toUpperCase()[1]);
const anyToCamel = (str) => str.replace(/[-./]./g, (x) => x.toUpperCase()[1]);
const kebabToPascal = (str) => capitalize(kebabToCamel(str));
const anyToPascal = (str) => capitalize(anyToCamel(str));

module.exports = {
  capitalize,
  kebabToCamel,
  anyToCamel,
  kebabToPascal,
  anyToPascal,
};
