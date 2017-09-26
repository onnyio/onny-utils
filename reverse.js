/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var reverse = require('lodash/reverse');

/**
 * Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.
 *
 * Note: This method mutates array and is based on Array#reverse.
 *
 * @param {Array} array
 * @return {Array} mutated array
 */
module.exports = function (array) {
  return reverse(array);
};