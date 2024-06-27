"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelToProper = void 0;
const capitalize_1 = require("./capitalize");
const splitWhen_1 = require("./splitWhen");
function camelToProper(str) {
    return (0, splitWhen_1.splitWhen)((x) => /[A-Z]/.test(x))(str)
        .map(capitalize_1.capitalize)
        .join(' ');
}
exports.camelToProper = camelToProper;
//# sourceMappingURL=camelToProper.js.map