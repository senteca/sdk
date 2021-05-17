const Mustache = require('mustache');
const { resolveRoot, writeFileAsync } = require('../utils/io');

module.exports = class ApiGenerator {
  static async generate(config, template, appName, api) {
    const content = Mustache.render(template, api);
    const path = resolveRoot(config.outputDir, 'apis', appName);
    await writeFileAsync(`${path}/${api.name}.ts`, content, {
      encoding: 'utf-8',
    });
  }
};
