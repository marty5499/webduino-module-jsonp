+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(webduino || {});
  } else {
    module.exports = factory;
  }
}(function (scope) {
  'use strict';

  var proto;
  var Module = scope.Module;

  function JSONP(fetchURL) {
    Module.call(this);
    this._fetchURL = fetchURL;
    this._jsonList = [];
  }

  JSONP.prototype = proto = Object.create(Module.prototype, {
    constructor: {
      value: JSONP
    }
  });

  proto.fetch = function (cb) {
    $.getJSON(this._fetchURL, function (json) {
      this._jsonList = json;
      cb();
    }.bind(this));
  }

  proto.data = function () {
    return this._jsonList;
  }

  proto.dataFilter = function (key, val, dataKey) {
    for (var i in this._jsonList) {
      var obj = this._jsonList[i];
      if (obj[key] == val) {
        return obj[dataKey];
      }
    }
    return "";
  }

  scope.module.JSONP = JSONP;
}));