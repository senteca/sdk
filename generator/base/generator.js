const Mustache = require('mustache');
const {
  mkDirIfNotExists,
  writeFileAsync,
  resolveRoot,
} = require('../utils/io');
const { outputDir } = require('../config');

module.exports = class BaseGenerator {
  static async generate(template, data) {
    const content = Mustache.render(template, data);
    const path = resolveRoot(outputDir);
    await mkDirIfNotExists(path);
    await writeFileAsync(`${path}/runtime.ts`, content, {
      encoding: 'utf-8',
    });
  }
};
