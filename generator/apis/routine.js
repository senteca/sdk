const Mustache = require('mustache');
const ApisMapper = require('./mapper');
const ApisGenerator = require('./generator');
const { getIn } = require('../utils/data');
const {
  readFileAsync,
  resolveRoot,
  readDirAsync,
  writeFileAsync,
  mkDirIfNotExists,
} = require('../utils/io');
const { target, outputDir } = require('../config');

module.exports = class ApisRoutine {
  static async run(apiDocuments) {
    const template = await this.loadTemplate();
    Mustache.parse(template); // pre-parse and caching template

    for (const doc of apiDocuments) {
      const appName = doc.info.title.toLowerCase();
      await this.createAppFolder(appName);

      const paths = getIn(doc, 'paths') || {};
      const groupedByApi = this.groupPathsByApi(paths);

      for (const rawApi of Object.values(groupedByApi)) {
        const api = ApisMapper.map(rawApi);
        await ApisGenerator.generate(template, appName, api);
      }
      await this.createAppIndexFile(appName);
    }
    await this.createIndexFile();
  }

  static groupPathsByApi(paths) {
    const pathKeys = Object.keys(paths);
    return pathKeys.reduce((map, curr) => {
      const methods = Object.keys(paths[curr]);
      const apiKey = paths[curr][methods[0]].tags[0];

      const api = map[apiKey] || { key: apiKey, actions: [] };
      api.actions.push({
        url: curr,
        methods: methods.map((method) => ({
          // TODO: quite messy
          method,
          ...paths[curr][method],
        })),
      });
      map[apiKey] = api;
      return map;
    }, {});
  }

  static async createAppFolder(appName) {
    const path = resolveRoot(outputDir, 'apis', appName);
    await mkDirIfNotExists(path);
  }

  static async createAppIndexFile(appName) {
    const path = resolveRoot(outputDir, 'apis', appName);
    const files = await readDirAsync(path);
    const content = files
      .map((file) => `export * from "./${file.replace('.ts', '')}";`)
      .join('\n');
    await writeFileAsync(`${path}/index.ts`, content, {
      encoding: 'utf-8',
    });
  }

  static async createIndexFile() {
    const path = resolveRoot(outputDir, 'apis');
    const apps = await readDirAsync(path);
    const content = apps.map((app) => `export * from "./${app}";`).join('\n');
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
