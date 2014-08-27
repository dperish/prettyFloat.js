// prettyFloat.js
(function () {

    window.prettyFloat = function (value, precision, localize) {

        /// <summary>Rounds, removes trailing zeros and optionally localizes floating point numbers</summary>
        /// <param name="value" type="Number">Input value to prettify</param>
        /// <param name="precision" type="Number">Decimal to round off at</param>
        /// <param name="localize" type="Boolean">Localize the output to the current culture's format</param>
        /// <returns type="String">A prettified floating point number, as a string</returns>

        if (!value) value = "";
        if (!precision) precision = 0;
        if (!localize) localize = false;

        var rounded =
            (!isNaN(precision) && parseInt(precision) > 0)
                ? parseFloat(value).toFixed(parseInt(precision))
                : value;

        var trimmed = parseFloat(rounded).toString();

        if (localize && !isNaN(trimmed)) {
            return parseFloat(trimmed).toLocaleString();
        }
        else {
            return trimmed;
        }

    };

})(window);