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
 * Note: Unlike _.pull, this method returns a new array.
 *
 * @param array
 * @param values
 */
export const without = (array, ...values) => (_.without(array, ...values));


/**
 *
 * @param array
 * @param iteratee
 * @param fromIndex
 * @return {number} - index of the item, otherwise -1
 */
export const findIndex = (array, iteratee, fromIndex = 0) => (_.findIndex(array, iteratee,
  fromIndex));


/**
 * Removes all given values from array using
 * SameValueZero for equality comparisons.
 *
 * Note: Unlike _.without, this method mutates array. Use _.remove to
 * remove elements from an array by predicate.
 *
 * @example
 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 * pull(array, 'a', 'c');
 * console.log(array); // => ['b', 'b']
 *
 * @param {*[]} array
 * @param {*[]} values to remove
 */
export const pull = (array, ...values) => (_.pull(array, ...values));

/**
 * Removes elements from array corresponding to indexes and returns an array of removed elements.
 *
 * NOTE - this mutates the array
 *
 * @param {array} array - The array to modify.
 * @param {number|number[]} indexes - The indexes of elements to remove.
 * @return {array} - Returns the new array of removed elements.
 */
export const pullAt = (array, ...indexes) => (_.pullAt(array, ...indexes));
