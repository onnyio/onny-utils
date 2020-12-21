/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var defaultsDeep = require('lodash/defaultsDeep');

module.exports = function (destObj) {
  var _len5;
  var _key5;
  var sources;
  for (_len5 = arguments.length, sources = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1;
    _key5 < _len5;
    _key5 += 1
  ) {
    sources[_key5 - 1] = arguments[_key5];
  }

  return defaultsDeep.apply(defaultsDeep, [destObj].concat(sources));
};
