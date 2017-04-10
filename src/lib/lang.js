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
// lang Helpers
///////////////////////////


/**
 * Performs a SameValueZero comparison between two values to determine if they are equivalent.
 *
 * @param {*} value - initial value
 * @param {*} other - value to compare
 * @returns {boolean} - if the two values match
 */
export const eq = (value, other) => (_.eq(value, other));

/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 *
 * Note: This method supports comparing arrays, array buffers, booleans, date objects,
 * error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and
 * typed arrays. Object objects are compared by their own, not inherited, enumerable
 * properties. Functions and DOM nodes are compared by strict equality, i.e. ===.
 *
 * @param {*} value - initial value
 * @param {*} other - value to compare
 * @returns {boolean} - if the two values match
 */
export const isEqual = (value, other) => (_.isEqual(value, other));

/**
 * This method is like clone() except that it recursively clones value.
 *
 * Note: This method is loosely based on the structured clone algorithm and
 * supports cloning arrays, array buffers, booleans, date objects, maps, numbers,
 * Object objects, regexes, sets, strings, symbols, and typed arrays. The own
 * enumerable properties of arguments objects are cloned as plain objects. An empty
 * object is returned for uncloneable values such as error objects, functions,
 * DOM nodes, and WeakMaps.
 *
 * @param {*} value
 * @return {*} cloned value
 */
export const cloneDeep = value => (_.cloneDeep(value));

/**
 * Creates a shallow clone of value.
 *
 * Note: This method is loosely based on the structured clone algorithm and
 * supports cloning arrays, array buffers, booleans, date objects, maps, numbers,
 * Object objects, regexes, sets, strings, symbols, and typed arrays. The own
 * enumerable properties of arguments objects are cloned as plain objects. An empty
 * object is returned for uncloneable values such as error objects, functions,
 * DOM nodes, and WeakMaps.
 *
 * @param {*} value
 * @return {*} cloned value
 */
export const clone = value => (_.clone(value));
