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


/**
 * @static
 * @typedef {object} OnnyUtils
 */

module.exports = {


  ///////////////////////////
  // Array Helpers
  ///////////////////////////


  /**
   * @function
   * @type OnnyUtils.without */
  without: arrayUtils.without,

  /**
   * @function
   * @type OnnyUtils.remove */
  remove: arrayUtils.remove,

  /**
   * @function
   * @type OnnyUtils.findIndex */
  findIndex: arrayUtils.findIndex,

  /**
   * @function
   * @type OnnyUtils.pull */
  pull: arrayUtils.pull,

  /**
   * @function
   * @type OnnyUtils.pullAt */
  pullAt: arrayUtils.pullAt,

  /**
   * @function
   * @type OnnyUtils.differenceWith */
  differenceWith: arrayUtils.differenceWith,


  ///////////////////////////
  // Collection Helpers
  ///////////////////////////

  /**
   * @function
   * @type OnnyUtils.map */
  map : collectionUtils.map,

  /**
   * @function
   * @type OnnyUtils.forEach */
  forEach : collectionUtils.forEach,

  /**
   * @function
   * @type OnnyUtils.find */
  find : collectionUtils.find,

  /**
   * @function
   * @type OnnyUtils.filter */
  filter : collectionUtils.filter,

  /** @type OnnyUtils.isEmpty */
  isEmpty : collectionUtils.isEmpty,

  /**
   * @function
   * @type OnnyUtils.some */
  some : collectionUtils.some,


  ///////////////////////////
  // Function Helpers
  ///////////////////////////

  /**
   * @function
   * @type OnnyUtils.debounce */
  debounce: functionUtils.debounce,


  ///////////////////////////
  // lang Helpers
  ///////////////////////////

  /**
   * @function
   * @type OnnyUtils.eq */
  eq: langUtils.eq,

  /**
   * @function
   * @type OnnyUtils.isEqual */
  isEqual: langUtils.isEqual,

  /**
   * @function
   * @type OnnyUtils.cloneDeep */
  cloneDeep: langUtils.cloneDeep,

  /**
   * @function
   * @type OnnyUtils.clone */
  clone: langUtils.clone,

  ///////////////////////////
  // Object Helpers
  ///////////////////////////

  /**
   * @function
   * @type OnnyUtils.objToArray */
  objToArray: objectUtils.objToArray,

  /**
   * @function
   * @type OnnyUtils.omit */
  omit: objectUtils.omit,

  /**
   * @function
   * @type OnnyUtils.assign */
  assign: objectUtils.assign,

  /**
   * @function
   * @type OnnyUtils.merge */
  merge: objectUtils.merge,

  /**
   * @function
   * @type OnnyUtils.defaults */
  defaults: objectUtils.defaults,

  /**
   * @function
   * @type OnnyUtils.defaultsDeep
   */
  defaultsDeep: objectUtils.defaultsDeep,

  /**
   * @function
   * @type OnnyUtils.values
   */
  values: objectUtils.values
};
