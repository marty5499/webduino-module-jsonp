+(function(factory) {
    if (typeof exports === 'undefined') {
        factory(webduino || {});
    } else {
        module.exports = factory;
    }
}(function(scope) {
    'use strict';

    var self;
    var proto;
    var Module = scope.Module;

    function JSONP(fetchURL) {
        Module.call(this);
        self = this;
        self._fetchURL = fetchURL;
        self._jsonList = [];
    }

    JSONP.prototype = proto = Object.create(Module.prototype, {
        constructor: {
            value: JSONP
        }
    });

    proto.fetch = function(cb) {
        $.getJSON(self._fetchURL, function(json) {
            self._jsonList = json;
            cb();
        });
    }

    proto.data = function() {
        return self._jsonList;
    }

    scope.module.JSONP = JSONP;
}));