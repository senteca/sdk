const Mustache = require("mustache");
const { resolveRoot, writeFileAsync } = require("../utils/io");
const { outputDir } = require("../config");

module.exports = class ApiGenerator {
  static async generate(template, appKey, api) {
    const content = Mustache.render(template, api);
    const path = resolveRoot(outputDir, "apis", appKey);
    await writeFileAsync(`${path}/${api.name}.ts`, content, {
      encoding: "utf-8",
    });
  }
};
