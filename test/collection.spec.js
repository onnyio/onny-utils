/**
 * @Copyright (C) 2015-2017 Onny LLC - All Rights Reserved
 *
 * This file is part of Onny and is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Onny LLC and/or Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2017.4.1
 */

var chai = require('chai'); // eslint-disable-line import/no-extraneous-dependencies
var onnyUtils = require('../src');

var expect = chai.expect;
var size = onnyUtils.size;
var sampleSize = onnyUtils.sampleSize;
var uniq = onnyUtils.uniq;


var test1 = 'test1';
var test2 = 'test2';
var test3 = 'test3';

function expectOriginalArray(testArray) {
  expect(testArray).to.deep.equal([test1, test2, test3]);
}

// function expectMutateOriginalArray(testArray) {
//   expect(testArray).to.not.deep.equal([test1, test2, test3]);
// }

describe(__filename, function () {
  var result;
  var testArray;
  beforeEach(function () {
    result = null;
    testArray = [];
    // verify array was cleared
    expect(testArray.length).to.equal(0);
    testArray.push(test1);
    testArray.push(test2);
    testArray.push(test3);

    // verify our array is set up
    expectOriginalArray(testArray);
  });

  // size
  /////////////////////////
  describe('size', function () {
    it('size of array', function () {
      result = size([1, 2, 3, 4]);
      expect(result).to.equal(4);
    });
    it('size of object', function () {
      result = size({
        one: 1,
        two: 2,
        three: 3,
        four: 4
      });
      expect(result).to.equal(4);
    });
    it('size of string', function () {
      result = size('hello world');
      expect(result).to.equal(11);
    });
  }); // size


  // sampleSize
  ////////////////////////////
  describe('sampleSize', function () {
    it('array', function () {
      var n = 9;
      var i;
      // run through it a bunch to ensure it actually gives unique results
      for (i = 0; i < 100; i += 1) {
        result = sampleSize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n);
        result = uniq(result);
        expect(result.length).to.equal(n);
      }
    });
  });
}); // file
