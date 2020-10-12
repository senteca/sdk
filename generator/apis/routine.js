const Mustache = require("mustache");
const ApisMapper = require("./mapper");
const ApisGenerator = require("./generator");
const { getIn } = require("../utils/data");
const { readFileAsync, resolveRoot, mkDirIfNotExists } = require("../utils/io");
const { target, outputDir } = require("../config");

module.exports = class ApisRoutine {
  static async run(json) {
    const paths = getIn(json, "paths") || {};

    const groupedByApp = this.groupPathsByApp(paths);

    const template = await this.loadTemplate();
    Mustache.parse(template); // pre-parse and caching template

    for (const app of Object.values(groupedByApp)) {
      // if (app.key === "merchandise") {
      await this.createAppFolder(app);
      for (const rawApi of Object.values(app.apis)) {
        // if (rawApi.key === "brands") {
        const api = ApisMapper.map(rawApi);
        await ApisGenerator.generate(template, app.key, api);
        // }
      }
      // }
    }
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

  static async loadTemplate() {
    return await readFileAsync(
      `${__dirname}/templates/${target}.mustache`,
      "utf-8"
    );
  }
};
