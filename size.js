/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var size = require('lodash/size');

/**
 * Gets the size of collection by returning its length for
 * array-like values or the number of own enumerable string keyed properties for objects.
 * @param {Array|Object|string} array
 * @return {number}
 */
module.exports = function (array) { return size(array) };
