/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var findLastIndex = require('lodash/findLastIndex');

/**
 *
 * @param {Array} array -  The array to inspect.
 * @param {function} predicate - function invoked per iteration
 * @param {number} [fromIndex=array.length-1] - Index to search from
 * @return {number} Returns the index of the found element, else -1.
 */
module.exports = function (array, predicate, fromIndex) {
  return findLastIndex(array, predicate, fromIndex);
};
