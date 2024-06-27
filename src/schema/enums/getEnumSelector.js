"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnumSelector = void 0;
function getEnumSelector(map) {
    return function (key) {
        return map[key].selector;
    };
}
exports.getEnumSelector = getEnumSelector;
//# sourceMappingURL=getEnumSelector.js.map