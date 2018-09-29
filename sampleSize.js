/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var _sampleSize = require('lodash/sampleSize');

/**
 *
 * @see  related - [_.sampleSize]{@link https://lodash.com/docs/4.17.10#sampleSize}
 *
 * @param {Array|Object} collection - collection to sample
 * @param {number} [n=1] - number of elements to sample
 * @return {Array} - Random elements
 */
module.exports = function sampleSize(collection, n) {
  return _sampleSize(collection, n);
};
