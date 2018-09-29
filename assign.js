/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var assign = require('lodash/assign');

module.exports = function (destObj) {
  var _len2;
  var _key2;
  var sources;
  for (_len2 = arguments.length, sources = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
    _key2 < _len2; _key2 += 1) {
    sources[_key2 - 1] = arguments[_key2];
  }

  return assign.apply(assign, [destObj].concat(sources));
};
