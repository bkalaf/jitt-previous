"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colClothingCare = void 0;
const baseCol_1 = require("./baseCol");
const ClothingCareControl_1 = require("../../components/controls/ClothingCareControl");
function colClothingCare(helper) {
    return function (...dependencies) {
        return function (name, header, section, readonly = false) {
            return (0, baseCol_1.baseCol)(helper, name, ClothingCareControl_1.FlattenedClothingCare, ClothingCareControl_1.ClothingCareControl, header, false, readonly, {}, undefined, ...dependencies);
            // return helper.accessor(name as any, {
            //     header: header ?? camelToProper(name),
            //     enableEditing: !readonly,
            //     Cell: createFlattedListCell(converted(section)),
            //     Edit: readonly ? NullCell : createClothingCareControl(section)
            // }) as any;
        };
    };
}
exports.colClothingCare = colClothingCare;
//# sourceMappingURL=colClothingCare.js.map