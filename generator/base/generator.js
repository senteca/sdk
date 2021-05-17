const Mustache = require('mustache');
const {
  mkDirIfNotExists,
  writeFileAsync,
  resolveRoot,
} = require('../utils/io');

module.exports = class BaseGenerator {
  static async generate(config, template, data) {
    const content = Mustache.render(template, data);
    const path = resolveRoot(config.outputDir);
    await mkDirIfNotExists(path);
    await writeFileAsync(`${path}/runtime.ts`, content, {
      encoding: 'utf-8',
    });
  }
};
