/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

const _differenceWith = require('lodash/differenceWith');

module.exports = function differenceWith(array, values, comparator) {
  return _differenceWith(array, values, comparator);
};
