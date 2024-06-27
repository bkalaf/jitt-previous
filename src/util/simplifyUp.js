"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simplifyUp = void 0;
function simplifyUp(factor, largerUOM) {
    return (num, uom) => {
        const value = num / factor;
        let integer = Math.floor(value);
        const decimal = value - integer;
        let smaller = Math.ceil(decimal * factor);
        if (smaller === factor) {
            smaller = 0;
            integer++;
        }
        return {
            uom1: largerUOM,
            uom2: uom,
            value1: integer,
            value2: smaller
        };
    };
}
exports.simplifyUp = simplifyUp;
//# sourceMappingURL=simplifyUp.js.map