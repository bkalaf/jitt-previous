"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colDate = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const baseCol_1 = require("./baseCol");
const DateControl_1 = require("../../components/table/controls/DateControl");
const StringTableCell_1 = require("../../components/table/cells/StringTableCell");
function colDate(helper) {
    return function (...dependencies) {
        return function (name, $header, opts, required = false, readonly = false) {
            const format = 'YYYY/MM/DD';
            return (0, baseCol_1.baseCol)(helper, name, StringTableCell_1.StringTableCell, DateControl_1.DateControl, $header, required, readonly, Object.assign({ formatter: (x) => (x == null ? '' : (0, dayjs_1.default)(x).format(format)) }, (opts !== null && opts !== void 0 ? opts : {})), undefined, ...dependencies);
            // return helper.accessor(name as any, {
            //     ...calculateSizes(header, { maxLength, minLength, ...(opts ?? {}) }),
            //     Cell: createStringCell<T, Date>(formatter ?? ((x?: Date) => (x == null ? '' : dayjs(x).format(format)))),
            //     header,
            //     // Header: createStringHeaderCell(),
            //     Edit: createDateControl<T>(opts ?? {}),
            //     enableEditing: !(opts?.readonly ?? false)
        };
    };
}
exports.colDate = colDate;
//# sourceMappingURL=colDate.js.map