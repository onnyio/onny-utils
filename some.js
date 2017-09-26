/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

const some = require('lodash/some');

module.exports = function (collection, predicate) { return some(collection, predicate);};