"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChoiceText = void 0;
const standardizeOptions_1 = require("../defs/standardizeOptions");
const enums_1 = __importDefault(require("../enums"));
function getChoiceText(enumKey) {
    return function (key) {
        var _a;
        const map = enums_1.default[enumKey];
        return (_a = (0, standardizeOptions_1.standardizeOptions)(map).asRecord[key]) === null || _a === void 0 ? void 0 : _a.text;
    };
}
exports.getChoiceText = getChoiceText;
//# sourceMappingURL=getChoiceText.js.map