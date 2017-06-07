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
var collection = require('./collection');

var forEach = collection.forEach;


///////////////////////////
// Object Helpers
///////////////////////////

module.exports = {


  /**
   * Convert an Object into an array
   *
   * @public
   * @static
   * @memberOf OnnyUtils
   * @param {object} obj
   * @param {function} funcMapToArray - returns each object element formatted to push onto array
   * @return {Array} - The new Array
   */
  objToArray: function (obj, funcMapToArray) {
    var a = [];
    forEach(obj, function (index) {
      a.push(funcMapToArray(index));
    });
    return a;
  },


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
   * @public
   * @static
   * @memberOf OnnyUtils
   * @param {object} obj - Source object
   * @param {...string|string[]} path - Paths to omit
   * @returns {Object} - The New object
   */
  omit: function (obj) {
    for ( var _len = arguments.length, path = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len;
          _key++ ) {
      path[_key - 1] = arguments[_key];
    }

    return _.omit.apply(_, [obj].concat(path));
  },

  /**
   * Assigns own enumerable string keyed properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.
   *
   * Note: This method mutates object and is loosely based on Object.assign.
   *
   *
   * @see related - [ _.assign]{@link https://lodash.com/docs/4.17.4#assign}
   *
   * @public
   * @static
   * @memberOf OnnyUtils
   * @param {object} destObj - destination object
   * @param {...Object} sources - Source objects
   * @return {object} returns mutated object
   */
  assign: function (destObj) {
    for ( var _len2 = arguments.length, sources = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
          _key2 < _len2; _key2++ ) {
      sources[_key2 - 1] = arguments[_key2];
    }

    return _.assign.apply(_, [destObj].concat(sources));
  },

  /**
   * This method is like {@link OnnyUtils.assign} except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object. Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment. Source objects are applied from left to right.
   * Subsequent sources overwrite property assignments of previous sources.
   *
   * Note: This method mutates object.
   *
   *
   * @see related - [ _.merge]{@link https://lodash.com/docs/4.17.4#merge}
   *
   * @public
   * @static
   * @memberOf OnnyUtils
   * @param {object} destObj - destination object
   * @param {...Object} sources - Source objects
   * @return {object} returns mutated object
   */
  merge: function (destObj) {
    for ( var _len3 = arguments.length, sources = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1;
          _key3 < _len3; _key3++ ) {
      sources[_key3 - 1] = arguments[_key3];
    }

    return _.merge.apply(_, [destObj].concat(sources))
      ;
  },

  /**
   * Assigns own and inherited enumerable string keyed properties of source objects to the destination object for all destination properties that resolve to undefined. Source objects are applied from left to right. Once a property is set, additional values of the same property are ignored.
   *
   * Note: This method mutates object.
   *
   *
   * @see related - [ _.defaults]{@link https://lodash.com/docs/4.17.4#defaults}
   *
   * @public
   * @static
   * @memberOf OnnyUtils
   * @param {object} destObj - destination object
   * @param {...Object} sources - Source objects
   * @return {object} returns mutated object
   */
  defaults: function (destObj) {
    for ( var _len4 = arguments.length, sources = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1;
          _key4 < _len4; _key4++ ) {
      sources[_key4 - 1] = arguments[_key4];
    }

    return _.defaults.apply(_, [destObj].concat(sources));
  },

  /**
   * This method is like {@link OnnyUtils.defaults} except that it recursively assigns default properties.
   *
   * Note: This method mutates object.
   *
   * @see related - [ _.defaultsDeep]{@link https://lodash.com/docs/4.17.4#defaultsDeep}
   *
   * @public
   * @static
   * @memberOf OnnyUtils
   * @param {object} destObj - destination object
   * @param {...Object} sources - Source objects
   * @return {object} returns mutated object
   */
  defaultsDeep: function (destObj) {
    for ( var _len5 = arguments.length, sources = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1;
          _key5 < _len5; _key5++ ) {
      sources[_key5 - 1] = arguments[_key5];
    }

    return _.defaultsDeep.apply(_, [destObj].concat(sources));
  },

  /**
   * Creates an array of the own enumerable string keyed property values of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @public
   * @static
   * @type function
   * @memberOf OnnyUtils
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
  values: function (object) {
    return _.values(object)
  }

};

