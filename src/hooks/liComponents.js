"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.liComponents = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
exports.liComponents = {
    string: ((value) => () => value !== null && value !== void 0 ? value : ''),
    int: ((value) => () => { var _a; return (_a = value === null || value === void 0 ? void 0 : value.toFixed(0)) !== null && _a !== void 0 ? _a : ''; }),
    double: ((value) => () => { var _a; return (_a = value === null || value === void 0 ? void 0 : value.toString()) !== null && _a !== void 0 ? _a : ''; }),
    date: ((value) => () => (value == null ? '' : (0, dayjs_1.default)(value).format('YYYY/MM/DD')))
};
//# sourceMappingURL=liComponents.js.map