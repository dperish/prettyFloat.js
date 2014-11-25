/*global window */
(function (global) {

    "use strict";

    global.prettyFloat = function (value, precision, localize) {

        /// <summary>Rounds, removes trailing zeros and optionally localizes floating point numbers</summary>
        /// <param name="value" type="Number">Input value to prettify</param>
        /// <param name="precision" type="Number">Decimal to round off at</param>
        /// <param name="localize" type="Boolean">Localize the output to the current culture's format</param>
        /// <returns type="String">A prettified floating point number, as a string</returns>

        value = value || "";
        precision = precision || 0;
        localize = localize || false;

        var rounded,
            trimmed;

        rounded = (!isNaN(precision) && parseInt(precision, 10) > 0)
            ? parseFloat(value).toFixed(parseInt(precision, 10))
            : value;

        trimmed = parseFloat(rounded, 10).toString();

        if (localize && !isNaN(trimmed)) {

            return parseFloat(trimmed, 10).toLocaleString();

        }

        return trimmed;

    };

}(window));
