const tryToLoad = function (filepath, fallback) {
  try {
    return require(filepath);
  } catch (error) {
    return fallback;
  }
};

module.exports = tryToLoad;
