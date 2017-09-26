/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var some = require('lodash/some');

module.exports = function (collection, predicate) { return some(collection, predicate);};