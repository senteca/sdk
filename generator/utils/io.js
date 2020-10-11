const { promisify } = require("util");
const fs = require("fs");
const path = require("path");

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const mkDirAsync = promisify(fs.mkdir);
const mkDirIfNotExists = async (path) => {
  if (!fs.existsSync(path)) {
    return await mkDirAsync(path, { recursive: true });
  }
};
const resolveRoot = (dir) => path.resolve(process.cwd(), dir);

module.exports = {
  readFileAsync,
  writeFileAsync,
  mkDirAsync,
  mkDirIfNotExists,
  resolveRoot,
};
