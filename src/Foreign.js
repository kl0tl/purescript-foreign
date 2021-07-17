"use strict";

export var typeOf = function (value) {
  return typeof value;
};

export var tagOf = function (value) {
  return Object.prototype.toString.call(value).slice(8, -1);
};

export var isNull = function (value) {
  return value === null;
};

export var isUndefined = function (value) {
  return value === undefined;
};

export var isArray = Array.isArray || function (value) {
  return Object.prototype.toString.call(value) === "[object Array]";
};
