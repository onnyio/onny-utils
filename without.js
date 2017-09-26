/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

const without = require('lodash/without');

module.exports = function (src) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1;
    _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }
  return without.apply(without, [src].concat(values));
};
