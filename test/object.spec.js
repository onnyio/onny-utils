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
const objectUtils = require('../src/index');

const expect = chai.expect;

const objToArray = objectUtils.objToArray;
const omit = objectUtils.omit;
const assign = objectUtils.assign;
const merge = objectUtils.merge;
const defaults = objectUtils.defaults;
const defaultsDeep = objectUtils.defaultsDeep;


// const defaultProp1 = 'defaultProp1';
const defaultProp2 = 'defaultProp2';
const defaultProp3 = 'defaultProp3';
const nestedProp1 = 'nestedProp1';
const addProp4 = 'addProp4';
const addProp5 = 'addProp5';

function expectOriginalObj(testObj) {
  expect(testObj).to.deep.equal({
    defaultProp1: { nestedProp1 },
    defaultProp2,
    defaultProp3
  });
}
function expectMutateOriginalObj(testObj) {
  expect(testObj).to.not.deep.equal({
    defaultProp1: { nestedProp1 },
    defaultProp2,
    defaultProp3
  });
}

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

  // objToArray
  /////////////////////////
  describe('objToArray', () => {
    beforeEach(() => {
      testObj = { 111111: { id: 'objID' } };
      result = objToArray(testObj, (item) => item.id);
    }
    );
    it('Does NOT mutate source', () => {
      expect(testObj).to.deep.equal({ 111111: { id: 'objID' } });
    });
    it('Returns array', () => {
      expect(result).to.deep
        .equal(['objID']);
    });
  }); // objToArray

  // omit
  /////////////////////////
  describe('omit', () => {
    beforeEach(() => {
      result = omit(testObj, defaultProp2);
    }
    );
    it('Does NOT mutate source', () => {
      expectOriginalObj(testObj);
    });
    it('Returns obj excluding values', () => {
      expect(result).to.deep
        .equal({ defaultProp1: { nestedProp1 }, defaultProp3 });
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
    }
    ); // assign No additional sources
    describe('Add additional properties', () => {
      beforeEach(() => {
        result = assign(testObj, { addProp4 });
      }
      );
      it('Mutates source obj', () => {
        expectMutateOriginalObj(testObj);
      });
      it('Adds the additional properties', () => {
        expect(testObj).to.deep
          .equal({
            defaultProp1: { nestedProp1 },
            defaultProp2,
            defaultProp3,
            addProp4
          });
      });
    }); // assign Add additional properties
    describe('Replace with additional properties', () => {
      beforeEach(() => {
        result = assign(testObj, { defaultProp3: addProp4 });
      }
      );
      it('Mutates source obj', () => {
        expectMutateOriginalObj(testObj);
      });
      it('Replaces existing prop with the additional property', () => {
        expect(testObj).to.deep
          .equal({
            defaultProp1: { nestedProp1 },
            defaultProp2,
            defaultProp3: addProp4
          });
      });
    }); // assign Replace with additional properties

    describe('Replace nested obj with additional property', () => {
      beforeEach(() => {
        result = assign(testObj, { defaultProp1: { addProp4 } });
      }
      );
      it('Mutates source obj', () => {
        expectMutateOriginalObj(testObj);
      });
      it('Replaces existing prop with the additional property', () => {
        expect(testObj).to.deep
          .equal({
            defaultProp1: { addProp4 },
            defaultProp2,
            defaultProp3
          });
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
    }
    ); // merge No additional sources
    describe('Add additional properties', () => {
      beforeEach(() => {
        result = merge(testObj, { addProp4 });
      }
      );
      it('Mutates source obj', () => {
        expectMutateOriginalObj(testObj);
      });
      it('Adds the additional properties', () => {
        expect(testObj).to.deep
          .equal({
            defaultProp1: { nestedProp1 },
            defaultProp2,
            defaultProp3,
            addProp4
          });
      });
    }); // merge Add additional properties

    describe('Add multiple additional properties', () => {
      beforeEach(() => {
        result = merge(testObj, { addProp4 }, { addProp5 });
      }
      );
      it('Mutates source obj', () => {
        expectMutateOriginalObj(testObj);
      });
      it('Adds the additional properties', () => {
        expect(testObj).to.deep
          .equal({
            defaultProp1: { nestedProp1 },
            defaultProp2,
            defaultProp3,
            addProp4,
            addProp5
          });
      });
    }); // merge Add additional properties

    describe('Merge with additional properties', () => {
      beforeEach(() => {
        result = merge(testObj, { defaultProp3: addProp4 });
      }
      );
      it('Mutates source obj', () => {
        expectMutateOriginalObj(testObj);
      });
      it('Replaces existing prop with the additional property', () => {
        expect(testObj).to.deep
          .equal({
            defaultProp1: { nestedProp1 },
            defaultProp2,
            defaultProp3: addProp4
          });
      });
    }); // merge Replace with additional properties

    describe('merge nested obj with additional property', () => {
      beforeEach(() => {
        result = merge(testObj, { defaultProp1: { addProp4 } });
      }
      );
      it('Mutates source obj', () => {
        expectMutateOriginalObj(testObj);
      });
      it('Replaces existing prop with the additional property', () => {
        expect(testObj).to.deep
          .equal({
            defaultProp1: { nestedProp1, addProp4 },
            defaultProp2,
            defaultProp3
          });
      });
    }); // Replace nested obj with additional property
  }); // merge


  // defaults
  /////////////////////////
  describe('defaults', () => {
    beforeEach(() => {
      result = defaults(testObj, { addProp4 });
    });

    it('Mutates source obj', () => {
      expectMutateOriginalObj(testObj);
    });

    it('sets addProp4 correctly', () => {
      expect(result).to.deep.equal({
        defaultProp1: { nestedProp1 },
        defaultProp2,
        defaultProp3,
        addProp4
      }
      );
    });
    it('only sets addProp4 once', () => {
      result = defaults(testObj, { addProp4: 'test' });
      expect(result).to.deep.equal({
        defaultProp1: { nestedProp1 },
        defaultProp2,
        defaultProp3,
        addProp4
      }
      );
    });
  }); // defaults


  // defaultsDeep
  /////////////////////////
  describe('defaultsDeep', () => {
    beforeEach(() => {
      result = defaultsDeep(testObj, { defaultProp1: { addProp4 } });
    });

    it('Mutates source obj', () => {
      expectMutateOriginalObj(testObj);
    });

    it('sets addProp4 correctly', () => {
      expect(result).to.deep.equal({
        defaultProp1: { nestedProp1, addProp4 },
        defaultProp2,
        defaultProp3
      }
      );
    });
    it('only sets addProp4 once', () => {
      result = defaultsDeep(testObj, { defaultProp1: { addProp4: 'test' } });
      expect(result).to.deep.equal({
        defaultProp1: { nestedProp1, addProp4 },
        defaultProp2,
        defaultProp3
      }
      );
    });
  }); // defaultsDeep
});
// file
