"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelToKebab = void 0;
const splitWhen_1 = require("./splitWhen");
function camelToKebab(str) {
    return (0, splitWhen_1.splitWhen)((x) => /[A-Z]/.test(x))(str)
        .map((x) => x.toLowerCase())
        .join('-');
}
exports.camelToKebab = camelToKebab;
//# sourceMappingURL=camelToKebab.js.map