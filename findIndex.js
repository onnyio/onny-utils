/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

const _findIndex = require('lodash/findIndex');

module.exports = function findIndex(src, iteratee) {
  const fromIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  return _findIndex(src, iteratee, fromIndex);
};
