const { readFileAsync, resolveRoot } = require("../utils/io");
const { target } = require("../config");

const BaseGenerator = require("./generator");

module.exports = class BaseRoutine {
  static async run() {
    const template = await this.loadTemplate();
    const data = { hello: "Hello world!" };
    await BaseGenerator.generate(template, data);
  }

  static async loadTemplate() {
    return await readFileAsync(
      `${__dirname}/templates/${target}.mustache`,
      "utf-8"
    );
  }
};
