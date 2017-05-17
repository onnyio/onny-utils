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

var chai = require('chai');
var arrayUtils = require('../index')

var expect = chai.expect;
var without = arrayUtils.without;
var  findIndex = arrayUtils.findIndex;
  var pullAt = arrayUtils.pullAt;


var test1 = 'test1';
var test2 = 'test2';
var test3 = 'test3';

function expectOriginalArray(testArray){
  expect(testArray).to.deep.equal([test1, test2, test3]);
};
function expectMutateOriginalArray(testArray){
  expect(testArray).to.not.deep.equal([test1, test2, test3]);
};

describe(__filename, function(){
  var result;
  var testIndex;
  var testArray;
  beforeEach(function(){
    result = null;
    testIndex = null;
    testArray = [];
    // verify array was cleared
    expect(testArray.length).to.equal(0);
    testArray.push(test1);
    testArray.push(test2);
    testArray.push(test3);

    // verify our array is set up
    expectOriginalArray(testArray);
  });

  // without
  /////////////////////////
  describe('without', function(){
    beforeEach(function(){
      result = without(testArray, test2);
    });
    it('Does NOT mutate source', function(){
      expectOriginalArray(testArray);
    });
    it('Returns array excluding values', function(){
      expect(result).to.deep.equal([test1, test3]);
    });
  }); // without

  // findIndex
  /////////////////////////
  describe('findIndex', function(){
    beforeEach(function(){
      result = findIndex(testArray, function(item){ return item === test2 });
    });
    it('Does NOT mutate source', function(){
      expectOriginalArray(testArray);
    });
    it('Returns the correct index', function(){
      expect(result).to.equal(1);
    });

    testIndex = 1;
    describe('findIndex from index ' + testIndex, function(){
      beforeEach(function(){
        testIndex = 1;
        result = findIndex(testArray, function(item){ return item === test2 }, testIndex);
      });
      it('Does NOT mutate source', function(){
        expectOriginalArray(testArray);
      });
      it('Returns the correct index', function(){
        expect(result).to.equal(1);
      });
      it('Does not return items before index ' + testIndex, function(){
        result = findIndex(testArray, function(item){ return item === test1 }, testIndex);
        expect(result).to.equal(-1);
      });
    });
  }); // findIndex

  // pullAt
  /////////////////////////
  testIndex = 1;
  describe('pullAt', function(){
    beforeEach(function(){
      pullAt(testArray, 1);
    });
    it('Mutates source', function(){
      expectMutateOriginalArray(testArray);
    });

    it('Returns array excluding values', function(){
      expect(testArray).to.deep.equal([test1, test3]);
    });
  }); // pullAt

}); // file