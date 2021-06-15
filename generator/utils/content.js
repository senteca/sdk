module.exports = {
  getContentType: (content) =>
    Object.keys(content)[0].replace(/[.]/g, (x) => `\\${x}`),
};
