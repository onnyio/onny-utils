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

const chai = require('chai');
const onnyUtils = require('../index');

const expect = chai.expect;
const without = onnyUtils.without;
const findIndex = onnyUtils.findIndex;
const pullAt = onnyUtils.pullAt;
const pull = onnyUtils.pull;
const differenceWith = onnyUtils.differenceWith;


const test1 = 'test1';
const test2 = 'test2';
const test3 = 'test3';
const alt1 = 'alt1';

function expectOriginalArray(testArray) {
  expect(testArray).to.deep.equal([test1, test2, test3]);
}
function expectMutateOriginalArray(testArray) {
  expect(testArray).to.not.deep.equal([test1, test2, test3]);
}

describe(__filename, () => {
  let result;
  let testIndex;
  let testArray;
  beforeEach(() => {
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
  describe('without', () => {
    beforeEach(() => {
      result = without(testArray, test2);
    });
    it('Does NOT mutate source', () => {
      expectOriginalArray(testArray);
    });
    it('Returns array excluding values', () => {
      expect(result).to.deep.equal([test1, test3]);
    });
    it('Fails gracefully if value is not found', () => {
      result = without(testArray, alt1);
      expectOriginalArray(testArray);
      expect(result).to.deep.equal(testArray);
    });
  }); // without

  // findIndex
  /////////////////////////
  describe('findIndex', () => {
    beforeEach(() => {
      result = findIndex(testArray, item => item === test2);
    });
    it('Does NOT mutate source', () => {
      expectOriginalArray(testArray);
    });
    it('Returns the correct index', () => {
      expect(result).to.equal(1);
    });

    testIndex = 1;
    describe(`findIndex from index ${testIndex}`, () => {
      beforeEach(() => {
        testIndex = 1;
        result = findIndex(testArray, item => item === test2, testIndex);
      });
      it('Does NOT mutate source', () => {
        expectOriginalArray(testArray);
      });
      it('Returns the correct index', () => {
        expect(result).to.equal(1);
      });
      it(`Does not return items before index ${testIndex}`, () => {
        result = findIndex(testArray, item => item === test1, testIndex);
        expect(result).to.equal(-1);
      });
    });
  }); // findIndex

  // pull
  /////////////////////////
  testIndex = 1;
  describe('pull', () => {
    beforeEach(() => {
      pull(testArray, test2);
    });
    it('Mutates source', () => {
      expectMutateOriginalArray(testArray);
    });

    it('Returns array excluding values', () => {
      expect(testArray).to.deep.equal([test1, test3]);
    });
  }); // pull

  // pullAt
  /////////////////////////
  testIndex = 1;
  describe('pullAt', () => {
    beforeEach(() => {
      pullAt(testArray, 1);
    });
    it('Mutates source', () => {
      expectMutateOriginalArray(testArray);
    });

    it('Returns array excluding values', () => {
      expect(testArray).to.deep.equal([test1, test3]);
    });
  }); // pullAt

  // differenceWith
  /////////////////////////
  testIndex = 1;
  describe('differenceWith', () => {
    beforeEach(() => {
      result = differenceWith(testArray, [test2], onnyUtils.isEqual);
    });
    it('Does NOT Mutate source', () => {
      expectOriginalArray(testArray);
    });

    it('Returns array excluding values', () => {
      expect(result).to.deep.equal([test1, test3]);
    });
  }); // differenceWith
}); // file
