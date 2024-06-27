"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colDimension = void 0;
const when_1 = require("../../defs/when");
const colInt_1 = require("../../defs/colInt");
const colDouble_1 = require("../../defs/colDouble");
const colEnum_1 = require("../../defs/colEnum");
function colDimension(help) {
    return function (...dependencies) {
        return function (name, $header, uom, numberType) {
            const func = numberType === 'int' ? colInt_1.colInt : colDouble_1.colDouble;
            return [func(help)(...dependencies)(`${name}.value`, $header, { min: 0 }), ...when_1.$disableWhen.property(`${name}.value`, 0, true)((0, colEnum_1.colEnum)(help)(`${name}.uom`, `${$header} UOM`, { enumKey: uom }))];
        };
    };
}
exports.colDimension = colDimension;
//# sourceMappingURL=colDimension.js.map