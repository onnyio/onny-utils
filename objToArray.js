/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var forEach = require('./forEach');

module.exports = function (obj, funcMapToArray) {
  var a = [];
  forEach(obj, function (index) {
    a.push(funcMapToArray(index));
  });
  return a;
}