const { readFileAsync, resolveRoot, writeFileAsync } = require("../utils/io");
const { target, outputDir } = require("../config");

const BaseGenerator = require("./generator");

module.exports = class BaseRoutine {
  static async run() {
    const template = await this.loadTemplate();
    const data = { hello: "Hello world!" };
    await BaseGenerator.generate(template, data);
    await this.createIndexFile();
  }

  static async createIndexFile() {
    const path = resolveRoot(outputDir);
    const exportPaths = ["apis", "models", "runtime"];
    const content = exportPaths
      .map((path) => `export * from "./${path}";`)
      .join("\n");
    await writeFileAsync(`${path}/index.ts`, content, {
      encoding: "utf-8",
    });
  }

  static async loadTemplate() {
    return await readFileAsync(
      `${__dirname}/templates/${target}.mustache`,
      "utf-8"
    );
  }
};
