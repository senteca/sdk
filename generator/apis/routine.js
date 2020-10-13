const Mustache = require("mustache");
const ApisMapper = require("./mapper");
const ApisGenerator = require("./generator");
const { getIn } = require("../utils/data");
const {
  readFileAsync,
  resolveRoot,
  readDirAsync,
  writeFileAsync,
  mkDirIfNotExists,
} = require("../utils/io");
const { target, outputDir } = require("../config");

module.exports = class ApisRoutine {
  static async run(json) {
    const paths = getIn(json, "paths") || {};

    const groupedByApp = this.groupPathsByApp(paths);

    const template = await this.loadTemplate();
    Mustache.parse(template); // pre-parse and caching template

    for (const app of Object.values(groupedByApp)) {
      await this.createAppFolder(app);
      for (const rawApi of Object.values(app.apis)) {
        const api = ApisMapper.map(rawApi);
        await ApisGenerator.generate(template, app.key, api);
      }
      await this.createAppIndexFile(app);
    }
    await this.createIndexFile();
  }

  static groupPathsByApp(paths) {
    const pathKeys = Object.keys(paths);
    return pathKeys.reduce((map, curr) => {
      const [_, appKey, apiKey] = curr.split("/");
      const app = map[appKey] || { key: appKey, apis: {} };
      const api = app.apis[apiKey] || { key: apiKey, actions: [] };
      api.actions.push({
        url: curr,
        methods: Object.keys(paths[curr]).map((method) => ({
          // TODO: quite messy
          method,
          ...paths[curr][method],
        })),
      });
      app.apis[apiKey] = api;
      map[appKey] = app;
      return map;
    }, {});
  }

  static async createAppFolder(app) {
    const path = resolveRoot(outputDir, "apis", app.key);
    await mkDirIfNotExists(path);
  }

  static async createAppIndexFile(app) {
    const path = resolveRoot(outputDir, "apis", app.key);
    const files = await readDirAsync(path);
    const content = files
      .map((file) => `export * from "./${file.replace(".ts", "")}";`)
      .join("\n");
    await writeFileAsync(`${path}/index.ts`, content, {
      encoding: "utf-8",
    });
  }

  static async createIndexFile() {
    const path = resolveRoot(outputDir, "apis");
    const apps = await readDirAsync(path);
    const content = apps
      .map((app) => `export * as ${app} from "./${app}";`)
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
