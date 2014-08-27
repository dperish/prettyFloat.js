/// <reference path="../prettyFloat.js" />
(function () {

    // 1
    QUnit.test("Base Tests", function (assert) {
        assert.ok(window.prettyFloat, "Window object for prettyFloat exists");
    });

    // 2
    QUnit.test("Numeric Tests", function (assert) {
        assert.equal(prettyFloat(1.1111100000, 5), "1.11111", "Rounds off and trims trailing 0 zeros");
        assert.equal(prettyFloat(1.1111, 4), "1.1111", "Does not effect last decimal if not 0");
        assert.equal(prettyFloat(12340, 4, true), "12,340", "Localizes");
        assert.equal(prettyFloat(1.00, 4), "1", "Equals the integer value if all decimal digits are 0");
        assert.equal(prettyFloat(0.1234567890, 9), "0.123456789", "Works with a value of less than 1");
        assert.equal(prettyFloat(1.123456789012345, 16), "1.123456789012345", "Accepts 15 decimal digits");
        assert.equal(prettyFloat(1234567890.123, 3, true), "1,234,567,890.123", "Returns large locale formatted string (en-us)");
    });

    // 3
    QUnit.test("Non-numeric Tests", function (assert) {
        assert.equal(prettyFloat("1.1111100000", 5), "1.11111", "Rounds off and trims trailing 0 zeros");
        assert.equal(prettyFloat("1.1111", 4), "1.1111", "Does not effect last decimal if not 0");
        assert.equal(prettyFloat("12340", 4), "12340", "Does not effect non decimals if ending in 0");
        assert.equal(prettyFloat("1.00", 4), "1", "Equals the integer value if all decimal digits are 0");
        assert.equal(prettyFloat("0.1234567890", 9), "0.123456789", "Works with a value of less than 1");
        assert.ok(isNaN(prettyFloat("toilet ipsum", 17)), "Returns NaN value for total non-numeric");
        assert.ok(isNaN(prettyFloat()), "", "Is callable with no arguments");
    });

})();