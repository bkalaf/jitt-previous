"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProperty = void 0;
function getProperty(name, obj) {
    var _a;
    if (name.includes('.')) {
        const [head, ...tail] = name.split('.');
        return getProperty(tail.join('.'), (_a = obj[head]) !== null && _a !== void 0 ? _a : {});
    }
    return obj[name];
}
exports.getProperty = getProperty;
//# sourceMappingURL=getProperty.js.map