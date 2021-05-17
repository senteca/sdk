const Loader = require('./loader');
const BaseRoutine = require('./base/routine');
const ModelsRoutine = require('./models/routine');
const ApisRoutine = require('./apis/routine');
const configV1 = require('./config');
const configV2 = require('./config-v2');

const apps = ['auth', 'cms', 'config', 'fulfillment', 'merchandise', 'users'];

const start = async () => {
  try {
    const apiDocuments = await Loader.loadDocuments(apps);

    const configs = [configV1, configV2];

    for (let config of configs) {
      await BaseRoutine.run(config);
      await ModelsRoutine.run(config, apiDocuments);
      await ApisRoutine.run(config, apiDocuments);
    }
  } catch (error) {
    console.log('Error generating sdk: ', error);
  }
};

start();
