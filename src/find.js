/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var find = require('lodash/find');

module.exports = function (collection, iteratee) {
  var fromIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return find(collection, iteratee, fromIndex);
};
