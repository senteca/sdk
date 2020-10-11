const Loader = require("./loader");
const BaseRoutine = require("./base/routine");
const ModelsRoutine = require("./models/routine");
const ApisRoutine = require("./apis/routine");

const start = async () => {
  try {
    const json = await Loader.load();
    await BaseRoutine.run();
    await ModelsRoutine.run(json);
    await ApisRoutine.run(json);
  } catch (error) {
    console.log("Error generating sdk: ", error);
  }
};

start();
