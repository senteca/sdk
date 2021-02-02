const Mustache = require('mustache');
const ModelsMapper = require('./mapper');
const ModelGenerator = require('./generator');
const { getIn } = require('../utils/data');
const {
  readFileAsync,
  resolveRoot,
  readDirAsync,
  writeFileAsync,
} = require('../utils/io');
const { target, outputDir } = require('../config');

module.exports = class ModelsRoutine {
  static async run(apiDocuments) {
    const template = await this.loadTemplate();
    Mustache.parse(template); // pre-parse and caching template

    for (const doc of apiDocuments) {
      const schemas = getIn(doc, 'components.schemas') || {};
      for (let schemaKey in schemas) {
        const schema = schemas[schemaKey];
        const model = ModelsMapper.map(schemaKey, schema);
        await ModelGenerator.generate(template, model);
      }
    }

    await this.createIndexFile();
  }

  static async createIndexFile() {
    const path = resolveRoot(outputDir, 'models');
    const files = await readDirAsync(path);
    const content = files
      .map((file) => `export * from "./${file.replace('.ts', '')}";`)
      .join('\n');
    await writeFileAsync(`${path}/index.ts`, content, {
      encoding: 'utf-8',
    });
  }

  static async loadTemplate() {
    return await readFileAsync(
      `${__dirname}/templates/${target}.mustache`,
      'utf-8',
    );
  }
};
