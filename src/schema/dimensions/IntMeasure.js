"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntMeasure = void 0;
const EntityBase_1 = require("../entity/EntityBase");
class IntMeasure extends EntityBase_1.EntityBase {
    static stringify(value, returnEmptyStringForNull = false) {
        return () => {
            return value == null ? returnEmptyStringForNull ? '' : undefined : [value.value.toFixed(0), value.uom].join('');
        };
    }
    static update(item) {
        return item;
    }
}
exports.IntMeasure = IntMeasure;
IntMeasure.liComponent = IntMeasure.stringify;
//# sourceMappingURL=IntMeasure.js.map