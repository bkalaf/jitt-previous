"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OldDimension = void 0;
const schemaName_1 = require("../../util/schemaName");
const _1 = require("../$");
const truncateAuto_1 = require("../../common/number/truncateAuto");
const EntityBase_1 = require("./EntityBase");
// export class Capacity extends EntityBase<ICapacity> implements ICapacity {
//     uom: CapacityUOM;
//     value: number;
//     static schema: Realm.ObjectSchema = {
//         name: schemaName($.capacity()),
//         embedded: true,
//         properties: {
//             uom: $.string.default('GB'),
//             value: $.double.default(0)
//         }
//     };
//     static liComponent: ListItemCellComponent<ICapacity> = (value?: ICapacity) => () => (value == null ? '' : `${truncateAuto(value.value)}${value.uom}`);
// }
/** @deprecated */
class OldDimension extends EntityBase_1.EntityBase {
    static update(item) {
        return item;
    }
    static init() {
        return {
            value: 0,
            uom: ''
        };
    }
}
exports.OldDimension = OldDimension;
OldDimension.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.dimension()),
    embedded: true,
    properties: {
        uom: _1.$.string.default(''),
        value: _1.$.double.default(0)
    }
};
OldDimension.liComponent = (value) => () => (value == null || value.uom === '' ? '' : `${(0, truncateAuto_1.truncateAuto)(value.value)}${value.uom}`);
//# sourceMappingURL=capacity.js.map