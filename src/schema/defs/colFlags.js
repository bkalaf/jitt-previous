"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colFlags = void 0;
const baseCol_1 = require("./baseCol");
const CheckGroupControl_1 = require("./CheckGroupControl");
const FlattenedListTableCell_1 = require("../../components/table/cells/FlattenedListTableCell");
const camelToProper_1 = require("../../common/text/camelToProper");
function colFlags(helper) {
    return function (...dependencies) {
        return function (name, header, flags, readonly = false) {
            return (0, baseCol_1.baseCol)(helper, name, FlattenedListTableCell_1.FlattenedListTableCell, CheckGroupControl_1.CheckGroupControl, header, false, readonly, {
                flags: flags !== null && flags !== void 0 ? flags : [],
                flattener: (value) => { var _a; return (_a = value === null || value === void 0 ? void 0 : value.map(camelToProper_1.camelToProper).join(', ')) !== null && _a !== void 0 ? _a : ''; }
            }, undefined, ...dependencies);
        };
    };
}
exports.colFlags = colFlags;
//# sourceMappingURL=colFlags.js.map