/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var merge = require('lodash/merge');

module.exports = function (destObj) {
  var _len;
  var _key;
  var sources;
  for (_len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1;
       _key < _len; _key += 1) {
    sources[_key - 1] = arguments[_key];
  }

  return merge.apply(merge, [destObj].concat(sources));
};