/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var omit = require('lodash/omit');

module.exports = function (obj) {
  var _len;
  var _key;
  var path;
  for (
    _len = arguments.length, path = Array(_len > 1 ? _len - 1 : 0), _key = 1;
    _key < _len;
    _key += 1) {
    path[_key - 1] = arguments[_key];
  }

  return omit.apply(omit, [obj].concat(path));
};
