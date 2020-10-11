const Mustache = require("mustache");
const ModelsMapper = require("./mapper");
const ModelGenerator = require("./generator");
const { getIn } = require("../utils/data");
const { readFileAsync } = require("../utils/io");
const { target } = require("../config");

module.exports = class ModelsRoutine {
  static async run(json) {
    const schemas = getIn(json, "components.schemas") || {};

    const template = await this.loadTemplate();
    Mustache.parse(template); // pre-parse and caching template

    for (let schemaKey in schemas) {
      const schema = schemas[schemaKey];
      const model = ModelsMapper.map(schemaKey, schema);
      await ModelGenerator.generate(template, model);
    }
  }

  static async loadTemplate() {
    return await readFileAsync(
      `${__dirname}/templates/${target}.mustache`,
      "utf-8"
    );
  }
};
