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


///////////////////////////
// Function Helpers
///////////////////////////

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
 * @param {function} func - function to debounce
 * @param {int} wait - delay in milliseconds
 * @param {object} options - The options object
 * @return {function} - debounced function
 */
export const debounce = (func, wait = 200, ...options) => (_.debounce(func, wait, ...options));

export default debounce;
