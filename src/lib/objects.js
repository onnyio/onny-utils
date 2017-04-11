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

/**
 * Convert an Object into an array
 *
 * @param {object} obj
 * @param {function} funcMapToArray - returns each object element formatted to push onto array
 * @return {Array} - The new Array
 */
export const objToArray = (obj, funcMapToArray) => {
  const a = [];
  forEach(obj, (index) => {
    a.push(funcMapToArray(index));
  });
  return a;
};


/**
 * return object minus the omitted parts
 *
 * The opposite of onny-utils.pick; this method creates an object composed of the
 * own and inherited enumerable property paths of object that are not omitted.
 *
 * Note: This method is considerably slower than onny-utils.pick.
 *
 * @param {object} obj - Source object
 * @param {...string|string[]} path - Paths to omit
 * @returns {Object} - The New object
 */
export const omit = (obj, ...path) => (_.omit(obj, ...path));

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * Note: This method mutates object and is loosely based on Object.assign.
 *
 * @param {object} destObj - destination object
 * @param {...Object} sources - Source objects
 * @return {object} returns mutated object
 */
export const assign = (destObj, ...sources) => (_.assign(destObj, ...sources));

/**
 * This method is like onny-utils.assign except that it recursively merges own and inherited
 * enumerable string keyed properties of source objects into the destination object.
 * Source properties that resolve to undefined are skipped if a destination value exists.
 * Array and plain object properties are merged recursively. Other objects and value
 * types are overridden by assignment. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * Note: This method mutates object.
 *
 * @param {object} destObj - destination object
 * @param {...Object} sources - Source objects
 * @return {object} returns mutated object
 */
export const merge = (destObj, ...sources) => (_.merge(destObj, ...sources));

 /**
 * Assigns own and inherited enumerable string keyed properties of source objects to
 * the destination object for all destination properties that resolve to undefined.
 * Source objects are applied from left to right. Once a property is set, additional
 * values of the same property are ignored.
 *
 * Note: This method mutates object.
 *
 * @param {object} destObj - destination object
 * @param {...Object} sources - Source objects
 * @return {object} returns mutated object
 */
 export const defaults = (destObj, ...sources) => (_.defaults(destObj, ...sources));

/**
 * This method is like onny-utils.defaults except that it recursively assigns default properties.
 *
 * Note: This method mutates object.
 *
 * @param {object} destObj - destination object
 * @param {...Object} sources - Source objects
 * @return {object} returns mutated object
 */
export const defaultsDeep = (destObj, ...sources) => (_.defaultsDeep(destObj, ...sources));
