# onny-utils 

[![NPM](https://nodei.co/npm/onny-utils.png)](https://npmjs.org/package/onny-utils)

[![Build Status](https://travis-ci.org/onnyio/onny-utils.svg?branch=master)](https://travis-ci.org/onnyio/onny-utils) [![Coverage Status](https://coveralls.io/repos/github/onnyio/onny-utils/badge.svg?branch=master)](https://coveralls.io/github/onnyio/onny-utils?branch=master)


A small library of utils for easy maintenance and upkeep for use in Onny.

Mostly based on/wrappers for [lodash](https://github.com/lodash/lodash)

## Installation
`npm i --save onny-utils`

````javascript
// load everything
import onnyUtils from 'onny-utils';

// selective loading
import { without } from 'onny-utils';
````

## Why onny-utils?
We needed a utils library that we have control over that we know will not change from underneath us.

## Array

### `without(src, ...values)`

Creates an array excluding all given values using [SameValueZero](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) for equality comparisons.

Note: Unlike onny-utils.pull, this method returns a new array.

* @param {Array} src - source array
* @param {...*} [values] - values to exclude
* @return {Array} - New Array


### `findIndex(array, iteratee, fromIndex = 0)`


This method is like onny-utils.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.
 
* @param {Array} src - Source array
* @param {function} iteratee
* @param {number} [fromIndex=0]
* @return {number} - index of the item, otherwise -1

### `pull(src, ...values)`


Removes all given values from array using [SameValueZero](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) for equality comparisons.

Note: Unlike onny-utils.without, this method mutates array. Use onny-utils.remove to remove elements from an array by predicate.

* @param {Array} src - Source array
* @param {...*} [values] - Values to remove
* @return {Array} mutated array

Example:

````javascript
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
pull(array, 'a', 'c');
console.log(array); // => ['b', 'b']
```` 

### `pullAt(src, ...indexes) `

Removes elements from array corresponding to indexes and returns an array of removed elements.

NOTE - this mutates the array

* @param {array} src - The array to modify.
* @param {...number|...number[]} indexes - The indexes of elements to remove.
* @return {array} - Returns the new array of removed elements.

## Object

### `omit(obj, ...path)`

Return object minus the omitted parts

The opposite of onny-utils.pick; this method creates an object composed of the own and inherited enumerable property paths of object that are not omitted.

Note: This method is considerably slower than onny-utils.pick.

* @param {object} obj - Source object
* @param {...string|string[]} path - Paths to omit
* @returns {Object} - The New object

### `assign(destObj, ...sources)`

Assigns own enumerable string keyed properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

Note: This method mutates object and is loosely based on Object.assign.

* @param {object} destObj - destination object
* @param {...Object} sources - Source objects
* @return {object} returns mutated object

### `merge(destObj, ...sources)`

This method is like onny-utils.assign except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object. Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

Note: This method mutates object.

* @param {object} destObj - destination object
* @param {...Object} sources - Source objects
* @return {object} returns mutated object

### `defaults(destObj, ...sources)`

Assigns own and inherited enumerable string keyed properties of source objects to
the destination object for all destination properties that resolve to undefined.
Source objects are applied from left to right. Once a property is set, additional
values of the same property are ignored.

Note: This method mutates object.

* @param {object} destObj - destination object
* @param {...Object} sources - Source objects
* @return {object} returns mutated object

### `defaultsDeep(destObj, ...sources)`

This method is like onny-utils.defaults except that it recursively assigns default properties.

Note: This method mutates object.

* @param {object} destObj - destination object
* @param {...Object} sources - Source objects
* @return {object} returns mutated object

### `objToArray(obj, funcMapToArray)`

Convert an Object into an array

* @param {object} obj - source object
* @param {function} funcMapToArray - returns each object element formatted to push onto array
* @return {Array} - The new Array

##### License
[GPL-3.0 License](https://github.com/onnyio/onny-utils/blob/master/LICENSE)

Copyright (C) 2015-2017 Onny LLC - All Rights Reserved