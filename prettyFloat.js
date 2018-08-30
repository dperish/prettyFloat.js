/**
 * prettyFloat.js - 1.2.0
 * The MIT License (MIT) - http://opensource.org/licenses/MIT
 */
(function () {
    "use strict";

    var that = this;

    /**
     * PrettyFloat rounds numbers, removes trailing zeros 
     * and optionally localizes floating point numbers
     * @param {number} value Input value to prettify
     * @param {number} precision Number of fractional digits to round at
     * @param {boolean} localize Localize the output to the current culture
     * @returns {string} A prettified floating point number, as a string
     * @global
     */
    var prettyFloat = function(value, precision, localize) {

        value = value || "";
        precision = precision || 0;
        localize = localize || false;

        var rounded,
            trimmed;

        rounded = (!isNaN(precision) && parseInt(precision, 10) > 0)
            ? parseFloat(value).toFixed(parseInt(precision, 10))
            : value;

        trimmed = parseFloat(rounded).toString();

        if (localize && !isNaN(trimmed)) {
            return parseFloat(trimmed).toLocaleString();
        }

        return trimmed;

    };

    this.prettyFloat = prettyFloat;
    
    Number.prototype.prettyFloat = function(precision, localize) {
        return that.prettyFloat(this, precision, localize);
    };

}).apply(window);