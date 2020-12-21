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
var objectUtils = require('../src');

var expect = chai.expect;

var objToArray = objectUtils.objToArray;
var omit = objectUtils.omit;
var assign = objectUtils.assign;
var merge = objectUtils.merge;
var defaults = objectUtils.defaults;
var defaultsDeep = objectUtils.defaultsDeep;


// const defaultProp1 = 'defaultProp1';
var defaultProp2 = 'defaultProp2';
var defaultProp3 = 'defaultProp3';
var nestedProp1 = 'nestedProp1';
var addProp4 = 'addProp4';
var addProp5 = 'addProp5';

function expectOriginalObj(testObj) {
  expect(testObj).to.deep.equal({
    defaultProp1: { nestedProp1: nestedProp1 },
    defaultProp2: defaultProp2,
    defaultProp3: defaultProp3
  });
}
function expectMutateOriginalObj(testObj) {
  expect(testObj).to.not.deep.equal({
    defaultProp1: { nestedProp1: nestedProp1 },
    defaultProp2: defaultProp2,
    defaultProp3: defaultProp3
  });
}

describe(__filename, function () {
  var result;
  var testObj;
  beforeEach(function () {
    result = null;
    testObj = {};
    // verify array was cleared
    expect(testObj).to.deep.equal({});
    testObj = {
      defaultProp1: {
        nestedProp1: nestedProp1
      },
      defaultProp2: defaultProp2,
      defaultProp3: defaultProp3
    };

    // verify our array is set up
    expectOriginalObj(testObj);
  });

  // objToArray
  /////////////////////////
  describe('objToArray', function () {
    beforeEach(function () {
      testObj = { 111111: { id: 'objID' } };
      result = objToArray(testObj, function (item) {
        return item.id;
      });
    }
    );
    it('Does NOT mutate source', function () {
      expect(testObj).to.deep.equal({ 111111: { id: 'objID' } });
    });
    it('Returns array', function () {
      expect(result).to.deep
        .equal(['objID']);
    });
  }); // objToArray

  // omit
  /////////////////////////
  describe('omit', function () {
    beforeEach(function () {
      result = omit(testObj, defaultProp2);
    }
    );
    it('Does NOT mutate source', function () {
      expectOriginalObj(testObj);
    });
    it('Returns obj excluding values', function () {
      expect(result).to.deep
        .equal({ defaultProp1: { nestedProp1: nestedProp1 }, defaultProp3: defaultProp3 });
    });
  }); // omit


  // assign
  /////////////////////////
  describe('assign', function () {
    describe('No additional sources', function () {
      beforeEach(function () {
        result = assign(testObj);
      });
      it('Does NOT mutate source obj', function () {
        expectOriginalObj(testObj);
      });
      it('returns the source obj', function () {
        expect(testObj).to.equal(result);
      });
    }
    ); // assign No additional sources
    describe('Add additional properties', function () {
      beforeEach(function () {
        result = assign(testObj, { addProp4: addProp4 });
      }
      );
      it('Mutates source obj', function () {
        expectMutateOriginalObj(testObj);
      });
      it('Adds the additional properties', function () {
        expect(testObj).to.deep
          .equal({
            defaultProp1: { nestedProp1: nestedProp1 },
            defaultProp2: defaultProp2,
            defaultProp3: defaultProp3,
            addProp4: addProp4
          });
      });
    }); // assign Add additional properties
    describe('Replace with additional properties', function () {
      beforeEach(function () {
        result = assign(testObj, { defaultProp3: addProp4 });
      }
      );
      it('Mutates source obj', function () {
        expectMutateOriginalObj(testObj);
      });
      it('Replaces existing prop with the additional property', function () {
        expect(testObj).to.deep
          .equal({
            defaultProp1: { nestedProp1: nestedProp1 },
            defaultProp2: defaultProp2,
            defaultProp3: addProp4
          });
      });
    }); // assign Replace with additional properties

    describe('Replace nested obj with additional property', function () {
      beforeEach(function () {
        result = assign(testObj, { defaultProp1: { addProp4: addProp4 } });
      }
      );
      it('Mutates source obj', function () {
        expectMutateOriginalObj(testObj);
      });
      it('Replaces existing prop with the additional property', function () {
        expect(testObj).to.deep
          .equal({
            defaultProp1: { addProp4: addProp4 },
            defaultProp2: defaultProp2,
            defaultProp3: defaultProp3
          });
      });
    }); // Replace nested obj with additional property
  }); // assign


  // merge
  /////////////////////////
  describe('merge', function () {
    describe('No additional sources', function () {
      beforeEach(function () {
        result = merge(testObj);
      });
      it('Does NOT mutate source obj', function () {
        expectOriginalObj(testObj);
      });
      it('returns the source obj', function () {
        expect(testObj).to.equal(result);
      });
    }
    ); // merge No additional sources
    describe('Add additional properties', function () {
      beforeEach(function () {
        result = merge(testObj, { addProp4: addProp4 });
      }
      );
      it('Mutates source obj', function () {
        expectMutateOriginalObj(testObj);
      });
      it('Adds the additional properties', function () {
        expect(testObj).to.deep
          .equal({
            defaultProp1: { nestedProp1: nestedProp1 },
            defaultProp2: defaultProp2,
            defaultProp3: defaultProp3,
            addProp4: addProp4
          });
      });
    }); // merge Add additional properties

    describe('Add multiple additional properties', function () {
      beforeEach(function () {
        result = merge(testObj, { addProp4: addProp4 }, { addProp5: addProp5 });
      }
      );
      it('Mutates source obj', function () {
        expectMutateOriginalObj(testObj);
      });
      it('Adds the additional properties', function () {
        expect(testObj).to.deep
          .equal({
            defaultProp1: { nestedProp1: nestedProp1 },
            defaultProp2: defaultProp2,
            defaultProp3: defaultProp3,
            addProp4: addProp4,
            addProp5: addProp5
          });
      });
    }); // merge Add additional properties

    describe('Merge with additional properties', function () {
      beforeEach(function () {
        result = merge(testObj, { defaultProp3: addProp4 });
      }
      );
      it('Mutates source obj', function () {
        expectMutateOriginalObj(testObj);
      });
      it('Replaces existing prop with the additional property', function () {
        expect(testObj).to.deep
          .equal({
            defaultProp1: { nestedProp1: nestedProp1 },
            defaultProp2: defaultProp2,
            defaultProp3: addProp4
          });
      });
    }); // merge Replace with additional properties

    describe('merge nested obj with additional property', function () {
      beforeEach(function () {
        result = merge(testObj, { defaultProp1: { addProp4: addProp4 } });
      }
      );
      it('Mutates source obj', function () {
        expectMutateOriginalObj(testObj);
      });
      it('Replaces existing prop with the additional property', function () {
        expect(testObj).to.deep
          .equal({
            defaultProp1: { nestedProp1: nestedProp1, addProp4: addProp4 },
            defaultProp2: defaultProp2,
            defaultProp3: defaultProp3
          });
      });
    }); // Replace nested obj with additional property
  }); // merge


  // defaults
  /////////////////////////
  describe('defaults', function () {
    beforeEach(function () {
      result = defaults(testObj, { addProp4: addProp4 });
    });

    it('Mutates source obj', function () {
      expectMutateOriginalObj(testObj);
    });

    it('sets addProp4 correctly', function () {
      expect(result).to.deep.equal({
        defaultProp1: { nestedProp1: nestedProp1 },
        defaultProp2: defaultProp2,
        defaultProp3: defaultProp3,
        addProp4: addProp4
      }
      );
    });
    it('only sets addProp4 once', function () {
      result = defaults(testObj, { addProp4: 'test' });
      expect(result).to.deep.equal({
        defaultProp1: { nestedProp1: nestedProp1 },
        defaultProp2: defaultProp2,
        defaultProp3: defaultProp3,
        addProp4: addProp4
      }
      );
    });
  }); // defaults


  // defaultsDeep
  /////////////////////////
  describe('defaultsDeep', function () {
    beforeEach(function () {
      result = defaultsDeep(testObj, { defaultProp1: { addProp4: addProp4 } });
    });

    it('Mutates source obj', function () {
      expectMutateOriginalObj(testObj);
    });

    it('sets addProp4 correctly', function () {
      expect(result).to.deep.equal({
        defaultProp1: { nestedProp1: nestedProp1, addProp4: addProp4 },
        defaultProp2: defaultProp2,
        defaultProp3: defaultProp3
      }
      );
    });
    it('only sets addProp4 once', function () {
      result = defaultsDeep(testObj, { defaultProp1: { addProp4: 'test' } });
      expect(result).to.deep.equal({
        defaultProp1: { nestedProp1: nestedProp1, addProp4: addProp4 },
        defaultProp2: defaultProp2,
        defaultProp3: defaultProp3
      }
      );
    });
  }); // defaultsDeep
});
// file
