"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentSetting = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const EntityBase_1 = require("./EntityBase");
const capacity_1 = require("./capacity");
class CurrentSetting extends EntityBase_1.EntityBase {
    static update(item) {
        return item;
    }
    static init() {
        return {
            amperage: capacity_1.OldDimension.init(),
            wattage: capacity_1.OldDimension.init(),
            voltage: capacity_1.OldDimension.init()
        };
    }
}
exports.CurrentSetting = CurrentSetting;
CurrentSetting.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.currentSetting()),
    embedded: true,
    properties: {
        amperage: _1.$.dimension(),
        voltage: _1.$.dimension(),
        wattage: _1.$.dimension()
    }
};
CurrentSetting.liComponent = (value) => () => {
    const stringify = capacity_1.OldDimension.liComponent;
    return value == null ? '' : [stringify(value.voltage)(), stringify(value.amperage)(), stringify(value.wattage)()].filter((x) => x != null && x.length > 0).join(' ');
};
//# sourceMappingURL=currentSetting.js.map