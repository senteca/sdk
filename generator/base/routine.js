const { readFileAsync, resolveRoot, writeFileAsync } = require('../utils/io');

const BaseGenerator = require('./generator');

module.exports = class BaseRoutine {
  static async run(config) {
    const template = await this.loadTemplate(config.target);
    const data = { hello: 'Hello world!' };
    await BaseGenerator.generate(config, template, data);
    await this.createIndexFile(config.outputDir);
  }

  static async createIndexFile(outputDir) {
    const path = resolveRoot(outputDir);
    const exportPaths = ['apis', 'models', 'runtime'];
    let content = exportPaths
      .map((path) => `export * from "./${path}";`)
      .join('\n');
    if (outputDir.indexOf('v2') === -1) {
      content += '\nexport * as v2 from "./v2";';
    }

    await writeFileAsync(`${path}/index.ts`, content, {
      encoding: 'utf-8',
    });
  }

  static async loadTemplate(target) {
    return await readFileAsync(
      `${__dirname}/templates/${target}.mustache`,
      'utf-8',
    );
  }
};
