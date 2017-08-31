const tryToLoad = function (filepath, fallback) {
  try {
    return require(filepath);
  } catch (error) {
    if (error.message === `Cannot find module '${filepath}'`) {
      console.log('Unable to load filepath. Defaulting to:', fallback);
      return fallback;
    }
    else throw new Error(error);
  }
};

module.exports = tryToLoad;
