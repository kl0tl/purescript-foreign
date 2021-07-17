"use strict";

export var unsafeReadPropImpl = function (f, s, key, value) {
  return value == null ? f : s(value[key]);
};

export var unsafeHasOwnProperty = function (prop, value) {
  return Object.prototype.hasOwnProperty.call(value, prop);
};

export var unsafeHasProperty = function (prop, value) {
  return prop in value;
};
