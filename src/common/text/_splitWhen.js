"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._splitWhen = void 0;
function _splitWhen(predicate, str) {
    function inner(todo, accum = [], current = []) {
        if (todo.length === 0)
            return [...accum, current];
        const [head, ...tail] = todo;
        return predicate(head) ? inner(tail, [...accum, current], [head]) : inner(tail, accum, [...current, head]);
    }
    return inner(str.split('')).map((x) => x.join(''));
}
exports._splitWhen = _splitWhen;
//# sourceMappingURL=_splitWhen.js.map