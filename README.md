prettyFloat.js
==============

Rounds and removes trailing zeros from JavaScript floating point types, and optionally localizes the output value to the current culture.

Arguments
-
prettyFloat(value, [precision = 0], [localize = false])
- **value** - Float - Input value to prettify
- **precision** - Int - Decimal to round at
- **localize** - Boolean - Localize the output to the current culture's format

-or-

*(number)*.prettyFloat([precision = 0], [localize = false])

Usage:
-
```
prettyFloat(1.111001, 3) // "1.111"
```

```
prettyFloat(1.111001, 4) // "1.111"
```

```
prettyFloat(1.1111001, 5) // "1.1111"
```

```
prettyFloat(1234.5678, 2) // "1234.57"
```

```
prettyFloat(1234.5678, 2, true) // "1,234.57" (en-US)
```

```
(1234.5678).prettyFloat(2, true) // "1,234.57" (en-US)
```

Note:
-
*All modern browsers now support the [ECMAScript Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl), which provides language sensitive string comparison, number formatting, and date and time formatting. For older browsers, you can use this polyfill:  https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en*

License:
-
The MIT License (MIT) - http://opensource.org/licenses/MIT
