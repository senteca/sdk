const { target } = require("../config");

module.exports = class ModelsRoutine {
  static async run(json) {
    console.log(`running models routine for ${target}`);
  }
};
