/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */


var forEachRight = require('lodash/forEachRight');

/**
 * @module forEachRight
 */

/**
 * This method is like forEach except that it iterates over elements of collection from right to left.
 *
 * @param {Array|Object} collection
 * @param {function} iteratee
 * @return {Array|Object}
 */
module.exports = function (collection, iteratee) {
  return forEachRight(collection, iteratee);
};