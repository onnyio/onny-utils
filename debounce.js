/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var debounce = require('lodash/debounce');

module.exports = function (func, wait, options) {
  var _len, _key;
  for ( _len = arguments.length, options = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len;
        _key++ ) {
    options[_key - 2] = arguments[_key];
  }

  wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;


  return debounce.apply(debounce, [func, wait].concat(options));
}