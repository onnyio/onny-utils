/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var map = require('lodash/map');

module.exports = function (collection, interatee) {
  return map(collection, interatee);
}