"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClothingCareControl = exports.FlattenedClothingCare = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useWhyDidIUpdate_1 = require("../../hooks/useWhyDidIUpdate");
const IndividualClothingCareControl_1 = require("./IndividualClothingCareControl");
const FlattenedClothingCareCell_1 = require("../table/cells/FlattenedClothingCareCell");
function FlattenedClothingCare(props) {
    const BleachingCell = (0, FlattenedClothingCareCell_1.FlattenedClothingCareCell)('bleaching');
    const DryCleanCell = (0, FlattenedClothingCareCell_1.FlattenedClothingCareCell)('dryClean');
    const DryingCell = (0, FlattenedClothingCareCell_1.FlattenedClothingCareCell)('drying');
    const GentleOrDelicateCell = (0, FlattenedClothingCareCell_1.FlattenedClothingCareCell)('gentleOrDelicate');
    const IroningCell = (0, FlattenedClothingCareCell_1.FlattenedClothingCareCell)('ironing');
    const PermanentPressCell = (0, FlattenedClothingCareCell_1.FlattenedClothingCareCell)('permanentPress');
    const TumbleDryCell = (0, FlattenedClothingCareCell_1.FlattenedClothingCareCell)('tumbleDry');
    const WashCell = (0, FlattenedClothingCareCell_1.FlattenedClothingCareCell)('wash');
    const WashTemperatureCell = (0, FlattenedClothingCareCell_1.FlattenedClothingCareCell)('washTemperature');
    return ((0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(BleachingCell, Object.assign({}, props)) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(DryCleanCell, Object.assign({}, props)) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(DryingCell, Object.assign({}, props)) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(GentleOrDelicateCell, Object.assign({}, props)) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(IroningCell, Object.assign({}, props)) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(PermanentPressCell, Object.assign({}, props)) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(TumbleDryCell, Object.assign({}, props)) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(WashCell, Object.assign({}, props)) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(WashTemperatureCell, Object.assign({}, props)) })] }));
}
exports.FlattenedClothingCare = FlattenedClothingCare;
function ClothingCareControl(props) {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('ClothingCareControl', props);
    const { dependencies } = props.column.columnDef.meta;
    const BleachingControl = (0, IndividualClothingCareControl_1.IndividualClothingCareControl)('bleaching', 'clothingCare.bleaching', ...(dependencies !== null && dependencies !== void 0 ? dependencies : []));
    const DryCleanControl = (0, IndividualClothingCareControl_1.IndividualClothingCareControl)('dryClean', 'clothingCare.dryClean', ...(dependencies !== null && dependencies !== void 0 ? dependencies : []));
    const DryingControl = (0, IndividualClothingCareControl_1.IndividualClothingCareControl)('drying', 'clothingCare.drying', ...(dependencies !== null && dependencies !== void 0 ? dependencies : []));
    const GentleOrDelicateControl = (0, IndividualClothingCareControl_1.IndividualClothingCareControl)('gentleOrDelicate', 'clothingCare.gentleOrDelicate', ...(dependencies !== null && dependencies !== void 0 ? dependencies : []));
    const IroningControl = (0, IndividualClothingCareControl_1.IndividualClothingCareControl)('ironing', 'clothingCare.ironing', ...(dependencies !== null && dependencies !== void 0 ? dependencies : []));
    const PermanentPressControl = (0, IndividualClothingCareControl_1.IndividualClothingCareControl)('permanentPress', 'clothingCare.permanentPress', ...(dependencies !== null && dependencies !== void 0 ? dependencies : []));
    const TumbleDryControl = (0, IndividualClothingCareControl_1.IndividualClothingCareControl)('tumbleDry', 'clothingCare.tumbleDry', ...(dependencies !== null && dependencies !== void 0 ? dependencies : []));
    const WashControl = (0, IndividualClothingCareControl_1.IndividualClothingCareControl)('wash', 'clothingCare.wash', ...(dependencies !== null && dependencies !== void 0 ? dependencies : []));
    const WashTemperatureControl = (0, IndividualClothingCareControl_1.IndividualClothingCareControl)('washTemperature', 'clothingCare.washTemperature', ...(dependencies !== null && dependencies !== void 0 ? dependencies : []));
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col', children: [(0, jsx_runtime_1.jsx)(BleachingControl, {}), (0, jsx_runtime_1.jsx)(DryCleanControl, {}), (0, jsx_runtime_1.jsx)(DryingControl, {}), (0, jsx_runtime_1.jsx)(GentleOrDelicateControl, {}), (0, jsx_runtime_1.jsx)(IroningControl, {}), (0, jsx_runtime_1.jsx)(PermanentPressControl, {}), (0, jsx_runtime_1.jsx)(TumbleDryControl, {}), (0, jsx_runtime_1.jsx)(WashControl, {}), (0, jsx_runtime_1.jsx)(WashTemperatureControl, {})] }));
}
exports.ClothingCareControl = ClothingCareControl;
//# sourceMappingURL=ClothingCareControl.js.map