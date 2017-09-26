/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

const forEach = require('lodash/forEach');

module.exports = function (collection, iteratee) {
  return forEach(collection, iteratee);
}