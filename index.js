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


//import { debounce } from './lib/function';
//import { eq, isEqual, cloneDeep, clone } from './lib/lang';
//import { objToArray, omit, assign, merge, defaults, defaultsDeep } from './lib/objects';

var arrayUtils = require('./src/lib/array');
var collectionUtils = require('./src/lib/collection');
var functionUtils = require('./src/lib/function');
var langUtils = require('./src/lib/lang');
var objectUtils = require('./src/lib/objects');

module.exports = {


  ///////////////////////////
  // Array Helpers
  ///////////////////////////

  /**
   * Creates an array excluding all given values using
   * SameValueZero for equality comparisons.
   *
   * Note: Unlike {@link onny-utils.pull}, this method returns a new array.
   *
   * @see {@link onny-utils.pull}
   * @see related - [ _.without]{@link https://lodash.com/docs/4.17.4#without}
   *
   * @function
   * @public
   * @param {Array} src - Source array
   * @param {...*} [values] - Values to exclude
   * @return {Array} - new Array
   */
  without: arrayUtils.without,


  /**
   * This method is like onny-utils.find except that it returns the index of the
   * first element predicate returns truthy for instead of the element itself.
   *
   * @see related - [ _.findIndex]{@link https://lodash.com/docs/4.17.4#findIndex}
   *
   * @function
   * @public
   * @param {Array} src - Source array
   * @param {function} iteratee
   * @param {number} [fromIndex=0]
   * @return {number} - index of the item, otherwise -1
   */
  findIndex: arrayUtils.findIndex,

  /**
   * Removes all given values from array using
   * SameValueZero for equality comparisons.
   *
   * Note: Unlike {@link onny-utils.without}, this method mutates array. Use onny-utils.remove to
   * remove elements from an array by predicate.
   *
   * @see {@link onny-utils.without}
   * @see related - [ _.pull]{@link https://lodash.com/docs/4.17.4#pull}
   *
   * @example
   * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
   * pull(array, 'a', 'c');
   * console.log(array); // => ['b', 'b']
   *
   * @function
   * @public
   * @param {Array} src - Source array
   * @param {...*} [values] - Values to remove
   * @return {Array} mutated array
   *
   */
  pull: arrayUtils.pull,

  /**
   * Removes elements from array corresponding to indexes and returns an array of removed elements.
   *
   * NOTE - this mutates the array
   *
   * @see related - [ _.pullAt]{@link https://lodash.com/docs/4.17.4#pullAt}
   *
   * @function
   * @public
   * @param {*[]} src - The array to modify.
   * @param {...number|...number[]} indexes - The indexes of elements to remove.
   * @return {*[]} - Returns the new array of removed elements.
   */
  pullAt: arrayUtils.pullAt,


  /**
   *
   * This method is like _.difference except that it accepts comparator which is invoked to compare
   * elements of array to values. The order and references of result values are determined by the
   * first array. The comparator is invoked with two arguments: (arrVal, othVal).
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
   * @function
   * @param {*[]} array - The array to inspect.
   * @param {*[]} values - The values to exclude.
   * @param {function} comparator - The comparator invoked per element.
   * @returns {[]} Returns the new array of filtered values.
   */
  differenceWith: arrayUtils.differenceWith,


  ///////////////////////////
  // Collection Helpers
  ///////////////////////////

  /**
   * Creates an array of values by running each element in collection
   * thru iteratee. The iteratee is invoked with three
   * arguments: (value, index|key, collection).
   *
   * @see related - [ _.map]{@link https://lodash.com/docs/4.17.4#map}
   *
   * @function
   * @public
   * @param {*[]|object} collection - collection to iterate over
   * @param {function} interatee - function invoked per iteration
   * @return {*[]} - the new mapped array
   */
  map : collectionUtils.map,

  /**
   * Iterates over elements of collection and invokes iteratee for each element
   * The iteratee is invoked with three arguments: (value, index|key, collection).
   * Iteratee functions may exit iteration early by explicitly returning false.
   *
   * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays.
   * To avoid this behavior use {@link onny-utils.forIn} or {@link onny-utils.forOwn} for object iteration.
   *
   * @see related - [ _.forEach]{@link https://lodash.com/docs/4.17.4#forEach}
   *
   * @function
   * @public
   * @param {*[]|object} collection - collection to iterate
   * @param {function} iteratee - function invoked per iteration
   * @return {*[]|object}
   */
  forEach : collectionUtils.forEach,

  /**
   * Iterates over elements of collection, returning the first element predicate returns truthy for.
   *
   * @see related - [ _.pullAt]{@link https://lodash.com/docs/4.17.4#pullAt}
   *
   * @function
   * @public
   * @param {*[]|object} collection - collection to iterate
   * @param {function} iteratee - function invoked per iteration
   * @param {number} [fromIndex=0]
   * @return {*[]|object} Returns the matched element, else undefined.
   */
  find : collectionUtils.find,

  /**
   * Iterates over elements of collection, returning an array of all elements
   * predicate returns truthy for.
   * The predicate is invoked with three arguments: (value, index|key, collection).
   *
   * Note: Unlike _.remove, this method returns a new array.
   *
   * @see related - [ _.pullAt]{@link https://lodash.com/docs/4.17.4#pullAt}
   *
   * @function
   * @public
   * @param {*[]|object} collection - collection to iterate
   * @param {function} predicate  - function invoked per iteration
   * @return {*[]|object}
   */
  filter : collectionUtils.filter,

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
   * @see related - [ _.pullAt]{@link https://lodash.com/docs/4.17.4#pullAt}
   *
   * @function
   * @public
   * @param {*} value -value to check
   * @return {boolean} - true if empty
   */
  isEmpty : collectionUtils.isEmpty,

  /**
   * Checks if predicate returns truthy for any element of collection. Iteration is stopped
   * once predicate returns truthy.
   * The predicate is invoked with three arguments: (value, index|key, collection).
   *
   * @see related - [ _.pullAt]{@link https://lodash.com/docs/4.17.4#pullAt}
   *
   * @function
   * @public
   * @param collection
   * @param predicate
   * @return {boolean} Returns true if any element passes the predicate check, else false.
   */
  some : collectionUtils.some,


  ///////////////////////////
  // Function Helpers
  ///////////////////////////


  /**
   * Creates a debounced function that delays invoking func until
   * after wait milliseconds have elapsed since the last time the
   * debounced function was invoked. The debounced function comes
   * with a cancel method to cancel delayed func invocations and
   * a flush method to immediately invoke them. Provide options to
   * indicate whether func should be invoked on the leading and/or
   * trailing edge of the wait timeout. The func is invoked with
   * the last arguments provided to the debounced function.
   * Subsequent calls to the debounced function return the result
   * of the last func invocation.
   *
   * @see related - [ _.debounce]{@link https://lodash.com/docs/4.17.4#debounce}
   *
   * @public
   * @function
   * @param {function} func - function to debounce
   * @param {int} [wait=200] - delay in milliseconds
   * @param {object} [options] - The options object
   * @return {function} - debounced function
   */
  debounce: functionUtils.debounce,


  ///////////////////////////
  // lang Helpers
  ///////////////////////////

  /**
   * Performs a SameValueZero comparison between two values to determine if they are equivalent.
   *
   * @see related - [ _.eq]{@link https://lodash.com/docs/4.17.4#eq}
   *
   * @public
   * @function
   * @param {*} value - initial value
   * @param {*} other - value to compare
   * @returns {boolean} - if the two values match
   */
  eq: langUtils.eq,

  /**
   * Performs a deep comparison between two values to determine if they are equivalent.
   *
   * Note: This method supports comparing arrays, array buffers, booleans, date objects,
   * error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and
   * typed arrays. Object objects are compared by their own, not inherited, enumerable
   * properties. Functions and DOM nodes are compared by strict equality, i.e. ===.
   *
   * @see related - [ _.isEqual]{@link https://lodash.com/docs/4.17.4#isEqual}
   *
   * @public
   * @function
   * @param {*} value - initial value
   * @param {*} other - value to compare
   * @returns {boolean} - if the two values match
   */
  isEqual: langUtils.isEqual,

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
   * @see related - [ _.cloneDeep]{@link https://lodash.com/docs/4.17.4#cloneDeep}
   *
   * @public
   * @function
   * @param {*} value
   * @return {*} cloned value
   */
  cloneDeep: langUtils.cloneDeep,

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
   * @see related - [ _.clone]{@link https://lodash.com/docs/4.17.4#clone}
   *
   * @public
   * @function
   * @param {*} value
   * @return {*} cloned value
   */
  clone: langUtils.clone,

  ///////////////////////////
  // Object Helpers
  ///////////////////////////

  /**
   * Convert an Object into an array
   *
   * @public
   * @function
   * @param {object} obj
   * @param {function} funcMapToArray - returns each object element formatted to push onto array
   * @return {Array} - The new Array
   */
  objToArray: objectUtils.objToArray,

  /**
   * return object minus the omitted parts
   *
   * The opposite of {@link onny-utils.pick} this method creates an object composed of the
   * own and inherited enumerable property paths of object that are not omitted.
   *
   * Note: This method is considerably slower than {@link onny-utils.pick}.
   *
   *
   * @see related - [ _.omit]{@link https://lodash.com/docs/4.17.4#omit}
   *
   * @public
   * @function
   * @param {object} obj - Source object
   * @param {...string|string[]} path - Paths to omit
   * @returns {Object} - The New object
   */
  omit: objectUtils.omit,

  /**
   * Assigns own enumerable string keyed properties of source objects to the
   * destination object. Source objects are applied from left to right.
   * Subsequent sources overwrite property assignments of previous sources.
   *
   * Note: This method mutates object and is loosely based on Object.assign.
   *
   *
   * @see related - [ _.assign]{@link https://lodash.com/docs/4.17.4#assign}
   *
   * @public
   * @function
   * @param {object} destObj - destination object
   * @param {...Object} sources - Source objects
   * @return {object} returns mutated object
   */
  assign: objectUtils.assign,

  /**
   * This method is like {@link onny-utils.assign} except that it recursively merges own and inherited
   * enumerable string keyed properties of source objects into the destination object.
   * Source properties that resolve to undefined are skipped if a destination value exists.
   * Array and plain object properties are merged recursively. Other objects and value
   * types are overridden by assignment. Source objects are applied from left to right.
   * Subsequent sources overwrite property assignments of previous sources.
   *
   * Note: This method mutates object.
   *
   *
   * @see related - [ _.merge]{@link https://lodash.com/docs/4.17.4#merge}
   *
   * @public
   * @function
   * @param {object} destObj - destination object
   * @param {...Object} sources - Source objects
   * @return {object} returns mutated object
   */
  merge: objectUtils.merge,

  /**
   * Assigns own and inherited enumerable string keyed properties of source objects to
   * the destination object for all destination properties that resolve to undefined.
   * Source objects are applied from left to right. Once a property is set, additional
   * values of the same property are ignored.
   *
   * Note: This method mutates object.
   *
   *
   * @see related - [ _.defaults]{@link https://lodash.com/docs/4.17.4#defaults}
   *
   * @public
   * @function
   * @param {object} destObj - destination object
   * @param {...Object} sources - Source objects
   * @return {object} returns mutated object
   */
  defaults: objectUtils.defaults,

  /**
   * This method is like {@link onny-utils.defaults} except that it recursively assigns default properties.
   *
   * Note: This method mutates object.
   *
   * @see related - [ _.defaultsDeep]{@link https://lodash.com/docs/4.17.4#defaultsDeep}
   *
   * @public
   * @function
   * @param {object} destObj - destination object
   * @param {...Object} sources - Source objects
   * @return {object} returns mutated object
   */
  defaultsDeep: objectUtils.defaultsDeep
};
