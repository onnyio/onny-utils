/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var defaults = require('lodash/defaults');

module.exports = function (destObj) {
  for ( var _len4 = arguments.length, sources = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1;
        _key4 < _len4; _key4++ ) {
    sources[_key4 - 1] = arguments[_key4];
  }

  return defaults.apply(defaults, [destObj].concat(sources));
}
