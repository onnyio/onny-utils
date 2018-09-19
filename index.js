/*
 * @Copyright (C) 2015- 2017 Onny LLC - All Rights Reserved
 * @license
 * This file is part of onny-utils and is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Onny LLC and/or Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2017.4.10
 */

var without = require('./without');
var remove = require('./remove');
var findIndex = require('./findIndex');
var pull = require('./pull');
var pullAt = require('./pullAt');
var differenceWith = require('./differenceWith');
var map = require('./map');
var find = require('./find');
var filter = require('./filter');
var isEmpty = require('./isEmpty');
var some = require('./some');
var values = require('./values');
var clone = require('./clone');
var cloneDeep = require('./cloneDeep');
var defaults = require('./defaults');
var defaultsDeep = require('./defaultsDeep');
var isEqual = require('./isEqual');
var omit = require('./omit');
var assign = require('./assign');
var merge = require('./merge');
var objToArray = require('./objToArray');
var debounce = require('./debounce');
var eq = require('./eq');
var forEach = require('./forEach');
var forEachRight = require('./forEachRight');
var reverse = require('./reverse');
var findLastIndex = require('./findLastIndex');
var intersectionWith = require('./intersectionWith');
var uniq = require('./uniq');
var size = require('./size');
var sampleSize = require('./sampleSize');


/**
 * @static
 * @typedef {object} OnnyUtils
 */

module.exports = {


  ///////////////////////////
  // Array Helpers
  ///////////////////////////


  /**
   * Creates an array excluding all given values using SameValueZero for equality comparisons.
   *
   * Note: Unlike {@link OnnyUtils.pull}, this method returns a new array.
   *
   * @see {@link OnnyUtils.pull}
   * @see related - [ _.without]{@link https://lodash.com/docs/4.17.4#without}
   *
   * @static
   * @param {Array} src - Source array
   * @param {...*} [values] - Values to exclude
   * @return {Array} - new Array
   */
  without: without,

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
   * @static
   * @param {Array} src - Array to modify
   * @param {function} predicate
   * @return {Array} - Returns the new array of removed elements.
   */
  remove: remove,


  /**
   * This method is like OnnyUtils.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.
   *
   * @see related - [ _.findIndex]{@link https://lodash.com/docs/4.17.4#findIndex}
   *
   * @static
   * @param {Array} src - Source array
   * @param {function} iteratee
   * @param {number} [fromIndex=0]
   * @return {number} - index of the item, otherwise -1
   */
  findIndex: findIndex,


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
   * @static
   * @param {Array} src - Source array
   * @param {...*} [values] - Values to remove
   * @return {Array} mutated array
   *
   */
  pull: pull,
  /**
   * Removes elements from array corresponding to indexes and returns an array of removed elements.
   *
   * NOTE - this mutates the array
   *
   * @see related - [ _.pullAt]{@link https://lodash.com/docs/4.17.4#pullAt}
   *
   * @static
   * @param {*[]} src - The array to modify.
   * @param {...number|...number[]} indexes - The indexes of elements to remove.
   * @return {*[]} - Returns the new array of removed elements.
   */
  pullAt: pullAt,

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
   * @static
   * @param {*[]} array - The array to inspect.
   * @param {*[]} values - The values to exclude.
   * @param {function} comparator - The comparator invoked per element.
   * @returns {[]} Returns the new array of filtered values.
   */
  differenceWith: differenceWith,


  ///////////////////////////
  // Collection Helpers
  ///////////////////////////

  /**
   *
   * @see  related - [_.sampleSize]{@link https://lodash.com/docs/4.17.10#sampleSize}
   *
   * @param {Array|Object} collection - collection to sample
   * @param {number} [n=1] - number of elements to sample
   * @return {Array} - Random elements
   */
  sampleSize: sampleSize,


  /**
   * Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments: (value, index|key, collection).
   *
   * @see related - [ _.map]{@link https://lodash.com/docs/4.17.4#map}
   *
   * @static
   * @param {*[]|object} collection - collection to iterate over
   * @param {function} interatee - function invoked per iteration
   * @return {*[]} - the new mapped array
   */
  map: map,

  /**
   * Iterates over elements of collection and invokes iteratee for each element The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
   *
   * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To avoid this behavior use {@link OnnyUtils.forIn} or {@link OnnyUtils.forOwn} for object iteration.
   *
   * @see related - [ _.forEach]{@link https://lodash.com/docs/4.17.4#forEach}
   *
   * @static
   * @param {*[]|object} collection - collection to iterate
   * @param {function} iteratee - function invoked per iteration
   * @return {*[]|object}
   */
  forEach: forEach,

  /**
   * Iterates over elements of collection, returning the first element predicate returns truthy for.
   *
   * @see related - [ _.pullAt]{@link https://lodash.com/docs/4.17.4#pullAt}
   *
   * @static
   * @param {*[]|object} collection - collection to iterate
   * @param {function} iteratee - function invoked per iteration
   * @param {number} [fromIndex=0]
   * @return {*[]|object} Returns the matched element, else undefined.
   */
  find: find,

  /**
   * Iterates over elements of collection, returning an array of all elements predicate returns truthy for.
   * The predicate is invoked with three arguments: (value, index|key, collection).
   *
   * Note: Unlike _.remove, this method returns a new array.
   *
   * @see related - [ _.pullAt]{@link https://lodash.com/docs/4.17.4#pullAt}
   *
   * @static
   * @param {*[]|object} collection - collection to iterate
   * @param {function} predicate  - function invoked per iteration
   * @return {*[]|object}
   */
  filter: filter,


  /**
   * Checks if value is an empty object, collection, map, or set.
   *
   * Objects are considered empty if they have no own enumerable string keyed properties.
   *
   * Array-like values such as arguments objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they have a length of 0. Similarly, maps and sets are considered empty if they have a size of 0.
   *
   * @see related - [ _.pullAt]{@link https://lodash.com/docs/4.17.4#pullAt}
   *
   * @static
   * @param {*} value -value to check
   * @return {boolean} - true if empty
   */
  isEmpty: isEmpty,

  /**
   * Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy.
   * The predicate is invoked with three arguments: (value, index|key, collection).
   *
   * @see related - [ _.pullAt]{@link https://lodash.com/docs/4.17.4#pullAt}
   *
   * @static
   * @param collection
   * @param predicate
   * @return {boolean} Returns true if any element passes the predicate check, else false.
   */
  some: some,


  ///////////////////////////
  // Function Helpers
  ///////////////////////////


  /**
   * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked. The debounced function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the debounced function.
   *
   * Subsequent calls to the debounced function return the result of the last func invocation.
   *
   * @see related - [ _.debounce]{@link https://lodash.com/docs/4.17.4#debounce}
   *
   * @static
   * @param {function} func - function to debounce
   * @param {int} [wait=200] - delay in milliseconds
   * @param {object} [options] - The options object
   * @return {function} - debounced function
   */
  debounce: debounce,


  ///////////////////////////
  // lang Helpers
  ///////////////////////////


  /**
   * Performs a SameValueZero comparison between two values to determine if they are equivalent.
   *
   * @see related - [ _.eq]{@link https://lodash.com/docs/4.17.4#eq}
   *
   * @static
   * @param {*} value - initial value
   * @param {*} other - value to compare
   * @returns {boolean} - if the two values match
   */
  eq: eq,

  /**
   * Performs a deep comparison between two values to determine if they are equivalent.
   *
   * Note: This method supports comparing arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. Object objects are compared by their own, not inherited, enumerable properties. Functions and DOM nodes are compared by strict equality, i.e. ===.
   *
   * @see related - [ _.isEqual]{@link https://lodash.com/docs/4.17.4#isEqual}
   *
   * @static
   * @param {*} value - initial value
   * @param {*} other - value to compare
   * @returns {boolean} - if the two values match
   */
  isEqual: isEqual,

  /**
   * This method is like {@link OnnyUtils.clone} except that it recursively clones value.
   *
   * @see related - [ _.cloneDeep]{@link https://lodash.com/docs/4.17.4#cloneDeep}
   *
   * @static
   * @param {*} value
   * @return {*} cloned value
   */
  cloneDeep: cloneDeep,

  /**
   * Creates a shallow clone of value.
   *
   * Note: This method is loosely based on the structured clone algorithm and supports cloning arrays, array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.
   *
   * @see related - [ _.clone]{@link https://lodash.com/docs/4.17.4#clone}
   *
   * @static
   * @param {*} value
   * @return {*} cloned value
   */
  clone: clone,

  ///////////////////////////
  // Object Helpers
  ///////////////////////////

  /**
   * Convert an Object into an array
   *
   * @static
   * @param {object} obj
   * @param {function} funcMapToArray - returns each object element formatted to push onto array
   * @return {Array} - The new Array
   */
  objToArray: objToArray,


  /**
   * return object minus the omitted parts
   *
   * The opposite of {@link OnnyUtils.pick} this method creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
   *
   * Note: This method is considerably slower than {@link OnnyUtils.pick}.
   *
   *
   * @see related - [ _.omit]{@link https://lodash.com/docs/4.17.4#omit}
   *
   * @static
   * @param {object} obj - Source object
   * @param {...string|string[]} path - Paths to omit
   * @returns {Object} - The New object
   */
  omit: omit,

  /**
   * Assigns own enumerable string keyed properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.
   *
   * Note: This method mutates object and is loosely based on Object.assign.
   *
   *
   * @see related - [ _.assign]{@link https://lodash.com/docs/4.17.4#assign}
   *
   * @static
   * @param {object} destObj - destination object
   * @param {...Object} sources - Source objects
   * @return {object} returns mutated object
   */
  assign: assign,

  /**
   * This method is like {@link OnnyUtils.assign} except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object. Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment. Source objects are applied from left to right.
   * Subsequent sources overwrite property assignments of previous sources.
   *
   * Note: This method mutates object.
   *
   *
   * @see related - [ _.merge]{@link https://lodash.com/docs/4.17.4#merge}
   *
   * @static
   * @param {object} destObj - destination object
   * @param {...Object} sources - Source objects
   * @return {object} returns mutated object
   */
  merge: merge,

  /**
   * Assigns own and inherited enumerable string keyed properties of source objects to the destination object for all destination properties that resolve to undefined. Source objects are applied from left to right. Once a property is set, additional values of the same property are ignored.
   *
   * Note: This method mutates object.
   *
   *
   * @see related - [ _.defaults]{@link https://lodash.com/docs/4.17.4#defaults}
   *
   * @static
   * @param {object} destObj - destination object
   * @param {...Object} sources - Source objects
   * @return {object} returns mutated object
   */
  defaults: defaults,

  /**
   * This method is like {@link OnnyUtils.defaults} except that it recursively assigns default properties.
   *
   * Note: This method mutates object.
   *
   * @see related - [ _.defaultsDeep]{@link https://lodash.com/docs/4.17.4#defaultsDeep}
   *
   * @static
   * @param {object} destObj - destination object
   * @param {...Object} sources - Source objects
   * @return {object} returns mutated object
   */
  defaultsDeep: defaultsDeep,

  /**
   * Creates an array of the own enumerable string keyed property values of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static values
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property values.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.values(new Foo);
   * // => [1, 2] (iteration order is not guaranteed)
   *
   * _.values('hi');
   * // => ['h', 'i']
   */
  values: values,

  forEachRight: forEachRight,
  reverse: reverse,
  findLastIndex: findLastIndex,
  intersectionWith: intersectionWith,
  uniq: uniq,
  size: size
};
