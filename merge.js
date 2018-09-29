/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var merge = require('lodash/merge');

module.exports = function (destObj) {
  var _len3;
  var _key3;
  var sources;
  for (_len3 = arguments.length, sources = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1;
    _key3 < _len3; _key3 += 3) {
    sources[_key3 - 1] = arguments[_key3];
  }

  return merge.apply(merge, [destObj].concat(sources));
};
