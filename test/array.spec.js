/*
 * @Copyright © 2016-2020 Onny LLC - All Rights Reserved
 *
 * This file is part of Onny and is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Onny LLC and/or Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2020.12.21
 */

const chai = require('chai'); // eslint-disable-line import/no-extraneous-dependencies
const onnyUtils = require('../src/index');

const expect = chai.expect;
const without = onnyUtils.without;
const findIndex = onnyUtils.findIndex;
const pullAt = onnyUtils.pullAt;
const pull = onnyUtils.pull;
const differenceWith = onnyUtils.differenceWith;
const uniq = onnyUtils.uniq;
const uniqBy = onnyUtils.uniqBy;
const intersectionWith = onnyUtils.intersectionWith;


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
      result = findIndex(testArray, (item) => item === test2);
    });
    it('Does NOT mutate source', () => {
      expectOriginalArray(testArray);
    });
    it('Returns the correct index', () => {
      expect(result).to.equal(1);
    });

    testIndex = 1;
    describe(`findIndex from index${testIndex}`, () => {
      beforeEach(() => {
        testIndex = 1;
        result = findIndex(testArray, (item) => item === test2, testIndex);
      });
      it('Does NOT mutate source', () => {
        expectOriginalArray(testArray);
      });
      it('Returns the correct index', () => {
        expect(result).to.equal(1);
      });
      it(`Does not return items before index${testIndex}`, () => {
        result = findIndex(testArray, (item) => item === test1, testIndex);
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


  // uniq
  /////////////////////////
  describe('uniq', () => {
    it('returns array of unique only', () => {
      result = uniq([2, 1, 2]);
      expect(result).to.deep.equal([2, 1]);
    });
  }); // uniq

  // uniqBy
  /////////////////////////
  describe('uniqBy', () => {
    it('returns array of unique only using the iteratee', () => {
      result = uniqBy([2.1, 1.2, 2.3], Math.floor);
      expect(result).to.deep.equal([2.1, 1.2]);
    });
  }); // uniqBy


  // intersectionWith
  /////////////////////////
  describe('intersectionWith', () => {
    it('returns array of unique only', () => {
      const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }];
      const others = [{ x: 1, y: 1 }, { x: 1, y: 2 }];

      result = intersectionWith(objects, others, onnyUtils.isEqual);
      expect(result).to.deep.equal([{ x: 1, y: 2 }]);
    });
  }); // intersectionWith
}); // file
