/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var uniqBy = require('lodash/uniqBy');

/**
 *
 * This method is like {@link OnnyUtils.uniq} except that it accepts iteratee which is invoked for each element in array to generate the criterion by which uniqueness is computed. The order of result values is determined by the order they occur in the array. The iteratee is invoked with one argument:
 *
 * @see [_.uniqBy]{@link https://lodash.com/docs/4.17.10#uniqBy} by lodash
 *
 * @static uniqBy
 * @param {Array} array - Array to inxpect
 * @param {function} [iteratee=_.identity] - The iteratee invoked per element.
 * @return {Array} Returns the new duplicate free array.
 *
 * @example
 *
 * OnnyUtils.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * OnnyUtils.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
module.exports = function (array, iteratee) { return uniqBy(array, iteratee); };
