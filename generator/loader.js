const { readFileAsync } = require("./utils/io");
const { source } = require("./config");

module.exports = class Loader {
  static async load() {
    const data = await readFileAsync(source); // TODO: probably retrieve from URL
    return JSON.parse(data);
  }
};
