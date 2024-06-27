"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFlattener = void 0;
const colDBList_1 = require("../../../schema/defs/colDBList");
const toFlattener = (section) => (value) => { var _a; return (_a = value === null || value === void 0 ? void 0 : value.map((0, colDBList_1.converted)(section)).join(', ')) !== null && _a !== void 0 ? _a : ''; };
exports.toFlattener = toFlattener;
//# sourceMappingURL=toFlattener.js.map