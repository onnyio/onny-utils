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

import { without, findIndex, pull, pullAt } from './lib/array';
import { map, forEach, find, filter, isEmpty, some } from './lib/collection';
import { debounce } from './lib/function';
import { eq, isEqual, cloneDeep, clone } from './lib/lang';
import { objToArray, omit, assign, merge, defaults, defaultsDeep } from './lib/objects';

module.exports = {


  ///////////////////////////
  // Array Helpers
  ///////////////////////////
  without,
  findIndex,
  pull,
  pullAt,


  ///////////////////////////
  // Collection Helpers
  ///////////////////////////
  map,
  forEach,
  find,
  filter,
  isEmpty,
  some,


  ///////////////////////////
  // Function Helpers
  ///////////////////////////
  debounce,


  ///////////////////////////
  // lang Helpers
  ///////////////////////////
  eq,
  isEqual,
  cloneDeep,
  clone,

  ///////////////////////////
  // Object Helpers
  ///////////////////////////
  objToArray,
  omit,
  assign,
  merge,
  defaults,
  defaultsDeep
};
