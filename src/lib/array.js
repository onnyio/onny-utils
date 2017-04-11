/**
 * @Copyright (C) 2015-2017 Onny LLC - All Rights Reserved
 *
 * This file is part of Onny and is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Onny LLC and/or Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2017.3.29
 */

import _ from 'lodash';


///////////////////////////
// Array Helpers
///////////////////////////

/**
 * Creates an array excluding all given values using
 * SameValueZero for equality comparisons.
 *
 * Note: Unlike onny-utils.pull, this method returns a new array.
 *
 * @param {Array} src - Source array
 * @param {...*} [values] - Values to exclude
 * @return {Array} - new Array
 */
export const without = (src, ...values) => (_.without(src, ...values));


/**
 * This method is like onny-utils.find except that it returns the index of the
 * first element predicate returns truthy for instead of the element itself.
 *
 * @param {Array} src - Source array
 * @param {function} iteratee
 * @param {number} [fromIndex=0]
 * @return {number} - index of the item, otherwise -1
 */
export const findIndex = (src, iteratee, fromIndex = 0) => (_.findIndex(src, iteratee,
  fromIndex));


/**
 * Removes all given values from array using
 * SameValueZero for equality comparisons.
 *
 * Note: Unlike onny-utils.without, this method mutates array. Use onny-utils.remove to
 * remove elements from an array by predicate.
 *
 * @example
 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 * pull(array, 'a', 'c');
 * console.log(array); // => ['b', 'b']
 *
 * @param {Array} src - Source array
 * @param {...*} [values] - Values to remove
 * @return {Array} mutated array
 */
export const pull = (src, ...values) => (_.pull(src, ...values));

/**
 * Removes elements from array corresponding to indexes and returns an array of removed elements.
 *
 * NOTE - this mutates the array
 *
 * @param {array} src - The array to modify.
 * @param {...number|...number[]} indexes - The indexes of elements to remove.
 * @return {array} - Returns the new array of removed elements.
 */
export const pullAt = (src, ...indexes) => (_.pullAt(src, ...indexes));
