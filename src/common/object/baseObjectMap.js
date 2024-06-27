"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseObjectMap = void 0;
function baseObjectMap(func, obj) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, func(v)]));
}
exports.baseObjectMap = baseObjectMap;
//# sourceMappingURL=baseObjectMap.js.map