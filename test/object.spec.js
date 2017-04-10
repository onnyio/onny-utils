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


import chai, { expect } from 'chai'
import {
  omit,
  assign,
  merge
} from '../src/lib/objects';

// const defaultProp1 = 'defaultProp1';
const defaultProp2 = 'defaultProp2';
const defaultProp3 = 'defaultProp3';
const nestedProp1 = 'nestedProp1';
const addProp4 = 'addProp4';

const expectOriginalObj = (testObj) => {
  expect(testObj).to.deep.equal({ defaultProp1: { nestedProp1 }, defaultProp2, defaultProp3 });
};
const expectMutateOriginalObj = (testObj) => {
  expect(testObj).to.not.deep.equal({ defaultProp1: { nestedProp1 }, defaultProp2, defaultProp3 });
};

describe(__filename, () => {
  let result;
  let testObj;
  beforeEach(() => {
    result = null;
    testObj = {};
    // verify array was cleared
    expect(testObj).to.deep.equal({});
    testObj = {
      defaultProp1: {
        nestedProp1
      },
      defaultProp2,
      defaultProp3
    };

    // verify our array is set up
    expectOriginalObj(testObj);
  });

  // omit
  /////////////////////////
  describe('omit', () => {
    beforeEach(() => {
      result = omit(testObj, defaultProp2);
    });
    it('Does NOT mutate source', () => {
      expectOriginalObj(testObj);
    });
    it('Returns obj excluding values', () => {
      expect(result).to.deep.equal({ defaultProp1: { nestedProp1 }, defaultProp3 });
    });
  }); // omit


  // assign
  /////////////////////////
  describe('assign', () => {
    describe('No additional sources', () => {
      beforeEach(() => {
        result = assign(testObj);
      });
      it('Does NOT mutate source obj', () => {
        expectOriginalObj(testObj);
      });
      it('returns the source obj', () => {
        expect(testObj).to.equal(result);
      });
    }); // assign No additional sources
    describe('Add additional properties', () => {
      beforeEach(() => {
        result = assign(testObj, { addProp4 });
      });
      it('Mutates source obj', () => {
        expectMutateOriginalObj(testObj);
      });
      it('Adds the additional properties', () => {
        expect(testObj).to.deep
          .equal({ defaultProp1: { nestedProp1 }, defaultProp2, defaultProp3, addProp4 });
      });
    }); // assign Add additional properties
    describe('Replace with additional properties', () => {
      beforeEach(() => {
        result = assign(testObj, { defaultProp3: addProp4 });
      });
      it('Mutates source obj', () => {
        expectMutateOriginalObj(testObj);
      });
      it('Replaces existing prop with the additional property', () => {
        expect(testObj).to.deep
          .equal({ defaultProp1: { nestedProp1 }, defaultProp2, defaultProp3: addProp4 });
      });
    }); // assign Replace with additional properties

    describe('Replace nested obj with additional property', () => {
      beforeEach(() => {
        result = assign(testObj, { defaultProp1: { addProp4 } });
      });
      it('Mutates source obj', () => {
        expectMutateOriginalObj(testObj);
      });

      it('Replaces existing prop with the additional property', () => {
        expect(testObj).to.deep
          .equal({ defaultProp1: { addProp4 }, defaultProp2, defaultProp3 });
      });
    }); // Replace nested obj with additional property
  }); // assign


  // merge
  /////////////////////////
  describe('merge', () => {
    describe('No additional sources', () => {
      beforeEach(() => {
        result = merge(testObj);
      });
      it('Does NOT mutate source obj', () => {
        expectOriginalObj(testObj);
      });
      it('returns the source obj', () => {
        expect(testObj).to.equal(result);
      });
    }); // merge No additional sources
    describe('Add additional properties', () => {
      beforeEach(() => {
        result = merge(testObj, { addProp4 });
      });
      it('Mutates source obj', () => {
        expectMutateOriginalObj(testObj);
      });
      it('Adds the additional properties', () => {
        expect(testObj).to.deep
          .equal({ defaultProp1: { nestedProp1 }, defaultProp2, defaultProp3, addProp4 });
      });
    }); // merge Add additional properties
    describe('Merge with additional properties', () => {
      beforeEach(() => {
        result = merge(testObj, { defaultProp3: addProp4 });
      });
      it('Mutates source obj', () => {
        expectMutateOriginalObj(testObj);
      });
      it('Replaces existing prop with the additional property', () => {
        expect(testObj).to.deep
          .equal({ defaultProp1: { nestedProp1 }, defaultProp2, defaultProp3: addProp4 });
      });
    }); // merge Replace with additional properties

    describe('merge nested obj with additional property', () => {
      beforeEach(() => {
        result = merge(testObj, { defaultProp1: { addProp4 } });
      });
      it('Mutates source obj', () => {
        expectMutateOriginalObj(testObj);
      });

      it('Replaces existing prop with the additional property', () => {
        expect(testObj).to.deep
          .equal({ defaultProp1: { nestedProp1, addProp4 }, defaultProp2, defaultProp3 });
      });
    }); // Replace nested obj with additional property
  }); // assign

}); // file