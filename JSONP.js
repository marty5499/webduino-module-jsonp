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
    var _fetchURL;
    var Module = scope.Module;

    function JSONP(fetchURL) {
        Module.call(this);
        self = this;
        self._fetchURL = fetchURL;
    }

    JSONP.prototype = proto = Object.create(Module.prototype, {
        constructor: {
            value: JSONP
        }
    });

    proto.fetch = function() {
        $.getJSON(self._fetchURL, function(json) {
            console.log(json);
        });
    }
    scope.module.JSONP = JSONP;
}));