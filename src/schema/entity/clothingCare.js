"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClothingCare = void 0;
const schemaName_1 = require("../../util/schemaName");
const _1 = require("../$");
const EntityBase_1 = require("./EntityBase");
const laundryCare_1 = require("../laundryCare");
class ClothingCare extends EntityBase_1.EntityBase {
    static update(item) {
        return item;
    }
    static init() {
        return {
            bleaching: [],
            ironing: [],
            dryClean: [],
            drying: [],
            wash: [],
            washTemperature: [],
            permanentPress: [],
            gentleOrDelicate: [],
            tumbleDry: []
        };
    }
}
exports.ClothingCare = ClothingCare;
ClothingCare.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.clothingCare()),
    embedded: true,
    properties: {
        bleaching: _1.$.string.list,
        dryClean: _1.$.string.list,
        drying: _1.$.string.list,
        gentleOrDelicate: _1.$.string.list,
        ironing: _1.$.string.list,
        permanentPress: _1.$.string.list,
        tumbleDry: _1.$.string.list,
        wash: _1.$.string.list,
        washTemperature: _1.$.string.list
    }
};
ClothingCare.liComponent = (value) => () => value == null ? '' : ([
    [value.bleaching, laundryCare_1.ClothingCareMap.bleaching],
    [value.dryClean, laundryCare_1.ClothingCareMap.dryClean],
    [value.drying, laundryCare_1.ClothingCareMap.drying],
    [value.gentleOrDelicate, laundryCare_1.ClothingCareMap.gentleOrDelicate],
    [value.permanentPress, laundryCare_1.ClothingCareMap.permanentPress],
    [value.ironing, laundryCare_1.ClothingCareMap.ironing],
    [value.tumbleDry, laundryCare_1.ClothingCareMap.tumbleDry],
    [value.wash, laundryCare_1.ClothingCareMap.wash],
    [value.washTemperature, laundryCare_1.ClothingCareMap.washTemperature]
]
    .filter((x) => x[0] != null && x[0].length > 0)
    .map((x) => x[0].map((indiv) => x[1][indiv].text).join(', '))
    .join(', '));
//# sourceMappingURL=clothingCare.js.map