/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var pull = require('lodash/pull');

module.exports = function (src) {
  var _len2;
  var _key2;
  var values;
  for (_len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
    _key2 < _len2; _key2 += 1) {
    values[_key2 - 1] = arguments[_key2];
  }

  return pull.apply(pull, [src].concat(values));
};
