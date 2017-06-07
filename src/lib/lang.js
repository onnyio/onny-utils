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
// lang Helpers
///////////////////////////

module.exports = {


  /**
   * Performs a SameValueZero comparison between two values to determine if they are equivalent.
   *
   * @see related - [ _.eq]{@link https://lodash.com/docs/4.17.4#eq}
   *
   * @public
   * @static
   * @memberOf OnnyUtils
   * @param {*} value - initial value
   * @param {*} other - value to compare
   * @returns {boolean} - if the two values match
   */
  eq: function (value, other) { return _.eq(value, other);},

  /**
   * Performs a deep comparison between two values to determine if they are equivalent.
   *
   * Note: This method supports comparing arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. Object objects are compared by their own, not inherited, enumerable properties. Functions and DOM nodes are compared by strict equality, i.e. ===.
   *
   * @see related - [ _.isEqual]{@link https://lodash.com/docs/4.17.4#isEqual}
   *
   * @public
   * @static
   * @memberOf OnnyUtils
   * @param {*} value - initial value
   * @param {*} other - value to compare
   * @returns {boolean} - if the two values match
   */
  isEqual: function (value, other) { return _.isEqual(value, other);},

  /**
   * This method is like {@link OnnyUtils.clone} except that it recursively clones value.
   *
   * @see related - [ _.cloneDeep]{@link https://lodash.com/docs/4.17.4#cloneDeep}
   *
   * @public
   * @static
   * @memberOf OnnyUtils
   * @param {*} value
   * @return {*} cloned value
   */
  cloneDeep: function (value) { return _.cloneDeep(value);},

  /**
   * Creates a shallow clone of value.
   *
   * Note: This method is loosely based on the structured clone algorithm and supports cloning arrays, array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.
   *
   * @see related - [ _.clone]{@link https://lodash.com/docs/4.17.4#clone}
   *
   * @public
   * @static
   * @memberOf OnnyUtils
   * @param {*} value
   * @return {*} cloned value
   */
  clone: function (value) {return _.clone(value);}

};

