/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var intersectionWith = require('lodash/intersectionWith');

module.exports = function (src) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1;
    _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }
  return intersectionWith.apply(intersectionWith, [src].concat(values));
};
