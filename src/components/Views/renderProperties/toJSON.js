"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJSON = void 0;
const realm_1 = __importDefault(require("realm"));
function toJSON(obj) {
    if (obj instanceof realm_1.default.Object)
        return obj.toJSON();
    return JSON.parse(JSON.stringify(obj));
}
exports.toJSON = toJSON;
//# sourceMappingURL=toJSON.js.map