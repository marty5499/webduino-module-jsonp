+(function(window, webduino) {
    'use strict';
    window.getJSONP = function(fetchURL) {
        return new webduino.module.JSONP(fetchURL);
    };
}(window, window.webduino));