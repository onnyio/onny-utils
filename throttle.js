/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var throttle = require('lodash/throttle');

/* eslint-disable no-param-reassign */
module.exports = function (func, wait, options) {
  var _len;
  var _key;
  for (_len = arguments.length, options = Array(_len > 2 ? _len - 2 : 0), _key = 2;
    _key < _len;
    _key += 1
  ) {
    options[_key - 2] = arguments[_key];
  }
  wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;


  return throttle.apply(throttle, [func, wait].concat(options));
};
