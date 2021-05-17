const Mustache = require('mustache');
const {
  resolveRoot,
  mkDirIfNotExists,
  writeFileAsync,
} = require('../utils/io');

module.exports = class ModelGenerator {
  static async generate(config, template, model) {
    const content = Mustache.render(template, model);
    const path = resolveRoot(config.outputDir, 'models');
    await mkDirIfNotExists(path); // TODO: no need to repeat for every model
    await writeFileAsync(`${path}/${model.name}.ts`, content, {
      encoding: 'utf-8',
    });
  }
};
