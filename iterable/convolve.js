/**
 * Maps the iterator with the additional tail of `k` previous items.
 * `k` is determined by the number of items in the accumulation iterator.
 *
 * @type rT The item type of the returned iterator.
 * @type iT The item type of the input iterator.
 * @this {Iterable<iT>}
 * @ntime O(n)
 * @dspace O(k)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3].convolve(function (tail) {
 *   return [...tail, this].reduce(add);
 * }, [0, -1]) // yields 0, 3, 6
 * ```
*/
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convolve = convolve;
var marked0$0 = [convolve].map(_regeneratorRuntime.mark);

function convolve(accumulator, tail) {
    var currentTail, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, result;

    return _regeneratorRuntime.wrap(function convolve$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                currentTail = [].concat(_toConsumableArray(tail));
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                context$1$0.prev = 4;
                _iterator = _getIterator(this);

            case 6:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    context$1$0.next = 15;
                    break;
                }

                item = _step.value;
                result = accumulator.call(item, currentTail);

                currentTail = [item].concat(currentTail.slice(0, tail.length - 1));
                context$1$0.next = 12;
                return result;

            case 12:
                _iteratorNormalCompletion = true;
                context$1$0.next = 6;
                break;

            case 15:
                context$1$0.next = 21;
                break;

            case 17:
                context$1$0.prev = 17;
                context$1$0.t0 = context$1$0["catch"](4);
                _didIteratorError = true;
                _iteratorError = context$1$0.t0;

            case 21:
                context$1$0.prev = 21;
                context$1$0.prev = 22;

                if (!_iteratorNormalCompletion && _iterator["return"]) {
                    _iterator["return"]();
                }

            case 24:
                context$1$0.prev = 24;

                if (!_didIteratorError) {
                    context$1$0.next = 27;
                    break;
                }

                throw _iteratorError;

            case 27:
                return context$1$0.finish(24);

            case 28:
                return context$1$0.finish(21);

            case 29:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this, [[4, 17, 21, 29], [22,, 24, 28]]);
}

;