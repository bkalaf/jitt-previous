"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProperty = void 0;
const getProperty_1 = require("./getProperty");
function setProperty(name, $obj, value) {
    var _a;
    const obj = Object.assign({}, $obj);
    if (name.includes('.')) {
        const [head, ...tail] = name.split('.');
        obj[head] = setProperty(tail.join('.'), (_a = (0, getProperty_1.getProperty)(head, obj)) !== null && _a !== void 0 ? _a : {}, value);
        return obj;
    }
    obj[name] = value;
    return obj;
}
exports.setProperty = setProperty;
//# sourceMappingURL=setProperty.js.map