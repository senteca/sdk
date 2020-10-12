const { kebabToPascal } = require("../utils/string");

module.exports = class ApiMapper {
  static map(api) {
    const name = `${kebabToPascal(api.key)}API`;
    const requestDTOs = [];
    const methods = [];

    api.actions.forEach((action) => {
      action.methods.forEach((method) => {
        // console.log(method);
        // TODO
      });
    });

    return {
      name,
      requestDTOs,
      methods,
    };
  }
};
