/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

const pullAt = require('lodash/pullAt');

module.exports = function (src) {
  for (var _len3 = arguments.length, indexes = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1;
    _key3 < _len3; _key3++) {
    indexes[_key3 - 1] = arguments[_key3];
  }
  return pullAt.apply(pullAt, [src].concat(indexes));
};
