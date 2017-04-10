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
import { forEach } from './collection';


///////////////////////////
// Object Helpers
///////////////////////////

export const objToArray = (obj, arrayMap) => {
  const a = [];
  forEach(obj, (index) => {
    a.push(arrayMap(index));
  });

  return a;
};


/**
 * return object minus the omitted parts
 * @param obj
 * @param path
 * @returns {Object}
 */
export const omit = (obj, ...path) => (_.omit(obj, ...path));

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * Note: This method mutates object and is loosely based on Object.assign.
 * @param obj
 * @param sources
 */
export const assign = (obj, ...sources) => (_.assign(obj, ...sources));

/**
 * This method is like _.assign except that it recursively merges own and inherited
 * enumerable string keyed properties of source objects into the destination object.
 * Source properties that resolve to undefined are skipped if a destination value exists.
 * Array and plain object properties are merged recursively. Other objects and value
 * types are overridden by assignment. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * Note: This method mutates object.
 *
 * @param {Object} obj
 * @param {Object} sources
 */
export const merge = (obj, ...sources) => (_.merge(obj, ...sources));
