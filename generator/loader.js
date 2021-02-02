const { apiURL } = require('./config');
const fetch = require('node-fetch');

module.exports = class Loader {
  static async loadDocuments(apps) {
    try {
      const apiDocuments = await Promise.all(
        apps.map((app) =>
          fetch(`${apiURL}/${app}/api-json`).then((r) => r.json()),
        ),
      );
      return apiDocuments;
    } catch (error) {
      console.log('Failed to load api documents !', error);
      return [];
    }
  }
};
