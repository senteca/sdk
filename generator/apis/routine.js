const { target } = require("../config");

module.exports = class ApisRoutine {
  static async run() {
    console.log(`running apis routine for ${target}`);
  }
};
