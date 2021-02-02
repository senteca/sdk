const Loader = require('./loader');
const BaseRoutine = require('./base/routine');
const ModelsRoutine = require('./models/routine');
const ApisRoutine = require('./apis/routine');

const apps = ['auth', 'cms', 'config', 'fulfillment', 'merchandise', 'users'];

const start = async () => {
  try {
    const apiDocuments = await Loader.loadDocuments(apps);
    await BaseRoutine.run();
    await ModelsRoutine.run(apiDocuments);
    await ApisRoutine.run(apiDocuments);
  } catch (error) {
    console.log('Error generating sdk: ', error);
  }
};

start();
