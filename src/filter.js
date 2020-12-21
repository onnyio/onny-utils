/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var filter = require('lodash/filter');

module.exports = function (collection, predicate) { return filter(collection, predicate); };
