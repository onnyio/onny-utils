/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

const pull = require('lodash/pull');

module.exports = function (src) {
  for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
    _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  return pull.apply(pull, [src].concat(values));
};
