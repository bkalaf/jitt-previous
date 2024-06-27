"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnumText = void 0;
const is_1 = require("../../common/is");
function getEnumText(map) {
    return function (key) {
        const result = map[key];
        return is_1.is.string(result) ? result : result.text;
    };
}
exports.getEnumText = getEnumText;
//# sourceMappingURL=getEnumText.js.map