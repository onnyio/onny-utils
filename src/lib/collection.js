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
// Collection Helpers
///////////////////////////


/**
 * Creates an array of values by running each element in collection
 * thru iteratee. The iteratee is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @param {array|object} collection - collection to iterate over
 * @param {function} interatee - function invoked per iteration
 * @return {array} - the new mapped array
 */
export const map = (collection, interatee) => (_.map(collection, interatee));

/**
 * Iterates over elements of collection and invokes iteratee for each element
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning false.
 *
 * Note: As with other "Collections" methods, objects with a "length" property
 * are iterated like arrays.
 * To avoid this behavior use _.forIn or _.forOwn for object iteration.
 *
 * @param {array|object} collection - collection to iterate
 * @param {function} iteratee - function invoked per iteration
 * @return {array|object}
 */
export const forEach = (collection, iteratee) => (_.forEach(collection, iteratee));

/**
 * Iterates over elements of collection, returning the first element predicate returns truthy for.
 *
 * @param {array|object} collection - collection to iterate
 * @param {function} iteratee - function invoked per iteration
 * @param fromIndex
 * @return {array|object} Returns the matched element, else undefined.
 */
export const find = (collection, iteratee, fromIndex = 0) => (_.find(collection, iteratee,
  fromIndex));

/**
 * Iterates over elements of collection, returning an array of all elements
 * predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, index|key, collection).
 *
 * Note: Unlike _.remove, this method returns a new array.
 *
 * @param {array|object} collection - collection to iterate
 * @param {function} predicate  - function invoked per iteration
 * @return {array|object}
 */
export const filter = (collection, predicate) => (_.filter(collection, predicate));

/**
 * Checks if value is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable
 * string keyed properties.
 *
 * Array-like values such as arguments objects, arrays, buffers,
 * strings, or jQuery-like collections are considered empty if
 * they have a length of 0. Similarly, maps and sets are considered
 * empty if they have a size of 0.
 *
 * @param {*} value -value to check
 * @return {boolean} - true if empty
 */
export const isEmpty = value => (_.isEmpty(value));

/**
 * Checks if predicate returns truthy for any element of collection. Iteration is stopped
 * once predicate returns truthy.
 * The predicate is invoked with three arguments: (value, index|key, collection).
 *
 * @param collection
 * @param predicate
 * @return {boolean} Returns true if any element passes the predicate check, else false.
 */
export const some = (collection, predicate) => (_.some(collection, predicate));
