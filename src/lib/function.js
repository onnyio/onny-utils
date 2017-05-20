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

var _ = require('lodash');


///////////////////////////
// Function Helpers
///////////////////////////

module.exports = {
  /**
   * Creates a debounced function that delays invoking func until
   * after wait milliseconds have elapsed since the last time the
   * debounced function was invoked. The debounced function comes
   * with a cancel method to cancel delayed func invocations and
   * a flush method to immediately invoke them. Provide options to
   * indicate whether func should be invoked on the leading and/or
   * trailing edge of the wait timeout. The func is invoked with
   * the last arguments provided to the debounced function.
   * Subsequent calls to the debounced function return the result
   * of the last func invocation.
   *
   * @see related - [ _.debounce]{@link https://lodash.com/docs/4.17.4#debounce}
   *
   * @public
   * @function
   * @param {function} func - function to debounce
   * @param {int} [wait=200] - delay in milliseconds
   * @param {object} [options] - The options object
   * @return {function} - debounced function
   */
  debounce: function (func, wait, options) {
    var _len, _key;
    for ( _len = arguments.length, options = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len;
          _key++ ) {
      options[_key - 2] = arguments[_key];
    }

    wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;


    return _.debounce(_, [func, wait].concat(options))
  }
}


