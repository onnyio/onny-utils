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

var _ = require('lodash');

///////////////////////////
// Array Helpers
///////////////////////////

module.exports = {
  /**
   * Creates an array excluding all given values using SameValueZero for equality comparisons.
   *
   * Note: Unlike {@link OnnyUtils.pull}, this method returns a new array.
   *
   * @see {@link OnnyUtils.pull}
   * @see related - [ _.without]{@link https://lodash.com/docs/4.17.4#without}
   *
   * @public
   * @static
   * @memberOf OnnyUtils
   * @param {Array} src - Source array
   * @param {...*} [values] - Values to exclude
   * @return {Array} - new Array
   */
  without: function (src) {
    for ( var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1;
          _key < _len; _key++ ) {
      values[_key - 1] = arguments[_key];
    }
    return _.without.apply(_, [src].concat(values));
  },
  /**
   * Removes all elements from array that predicate returns truthy for and returns an array of the removed elements.
   * The predicate is invoked with three arguments: (value, index, array).
   *
   * Note: Unlike {@link OnnyUtils.filter},this method mutates array. Use {@link OnnyUtils.pull} to pull elements from an array by value.
   *
   * @see {@link OnnyUtils.filter}
   * @see {@link OnnyUtils.pull}
   * @see related - [ _.remove]{@link https://lodash.com/docs/4.17.4#remove}
   *
   * @public
   * @static
   * @memberOf OnnyUtils
   * @param {Array} src - Array to modify
   * @param {function} predicate
   * @return {Array} - Returns the new array of removed elements.
   */
  remove: function (src, predicate) {
    return _.remove(src, predicate)
  },


  /**
   * This method is like OnnyUtils.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.
   *
   * @see related - [ _.findIndex]{@link https://lodash.com/docs/4.17.4#findIndex}
   *
   * @public
   * @static
   * @memberOf OnnyUtils
   * @param {Array} src - Source array
   * @param {function} iteratee
   * @param {number} [fromIndex=0]
   * @return {number} - index of the item, otherwise -1
   */
  findIndex: function (src, iteratee) {
    var fromIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    return _.findIndex(src, iteratee, fromIndex);
  },


  /**
   * Removes all given values from array using SameValueZero for equality comparisons.
   *
   * Note: Unlike {@link OnnyUtils.without}, this method mutates array. Use {@link OnnyUtils.remove} to
   * remove elements from an array by predicate.
   *
   * @see {@link OnnyUtils.without}
   * @see related - [ _.pull]{@link https://lodash.com/docs/4.17.4#pull}
   *
   * @example
   * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
   * pull(array, 'a', 'c');
   * console.log(array); // => ['b', 'b']
   *
   * @public
   * @static
   * @memberOf OnnyUtils
   * @param {Array} src - Source array
   * @param {...*} [values] - Values to remove
   * @return {Array} mutated array
   *
   */
  pull: function (src) {
    for ( var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
          _key2 < _len2; _key2++ ) {
      values[_key2 - 1] = arguments[_key2];
    }

    return _.pull.apply(_, [src].concat(values));
  },
  /**
   * Removes elements from array corresponding to indexes and returns an array of removed elements.
   *
   * NOTE - this mutates the array
   *
   * @see related - [ _.pullAt]{@link https://lodash.com/docs/4.17.4#pullAt}
   *
   * @public
   * @static
   * @memberOf OnnyUtils
   * @param {*[]} src - The array to modify.
   * @param {...number|...number[]} indexes - The indexes of elements to remove.
   * @return {*[]} - Returns the new array of removed elements.
   */
  pullAt: function (src) {
    for ( var _len3 = arguments.length, indexes = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1;
          _key3 < _len3; _key3++ ) {
      indexes[_key3 - 1] = arguments[_key3];
    }
    return _.pullAt.apply(_, [src].concat(indexes));
  },

  /**
   *
   * This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
   *
   * Note: Unlike _.pullAllWith, this method returns a new array.
   *
   * @example
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
   *
   * differenceWith(objects, [{ 'x': 1, 'y': 2 }], isEqual);
   * // => [{ 'x': 2, 'y': 1 }]
   *
   * @public
   * @static
   * @memberOf OnnyUtils
   * @param {*[]} array - The array to inspect.
   * @param {*[]} values - The values to exclude.
   * @param {function} comparator - The comparator invoked per element.
   * @returns {[]} Returns the new array of filtered values.
   */
  differenceWith: function (array, values, comparator) {
    return _.differenceWith(array, values, comparator);
  }
};


