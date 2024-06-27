"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleMeasure = void 0;
const truncateAuto_1 = require("../../common/number/truncateAuto");
const EntityBase_1 = require("../entity/EntityBase");
class DoubleMeasure extends EntityBase_1.EntityBase {
    static stringify(value, returnEmptyForNull = false) {
        return () => {
            return value == null ? returnEmptyForNull ? '' : undefined : [(0, truncateAuto_1.truncateAuto)(value.value, 2), value.uom].join('');
        };
    }
    static update(item) {
        return item;
    }
}
exports.DoubleMeasure = DoubleMeasure;
DoubleMeasure.liComponent = DoubleMeasure.stringify;
//# sourceMappingURL=DoubleMeasure.js.map