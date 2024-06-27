"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curry = void 0;
function curry(func) {
    return (x) => {
        const next = func.bind(null, x);
        return next.length === 0 ? next() : curry(next);
    };
}
exports.curry = curry;
//# sourceMappingURL=curry.js.map