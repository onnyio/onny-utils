/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

const remove = require('lodash/remove');

module.exports = function (src, predicate) {
  return remove(src, predicate);
};
