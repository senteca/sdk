const Mustache = require("mustache");
const { resolveRoot, writeFileAsync } = require("../utils/io");
const { outputDir } = require("../config");

module.exports = class ApiGenerator {
  static async generate(template, appName, api) {
    const content = Mustache.render(template, api);
    const path = resolveRoot(outputDir, "apis", appName);
    await writeFileAsync(`${path}/${api.name}.ts`, content, {
      encoding: "utf-8",
    });
  }
};
