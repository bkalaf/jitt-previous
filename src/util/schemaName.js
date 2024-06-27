"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaName = void 0;
function schemaName(str) {
    return str.includes('?') ? str.replace('?', '') : str;
}
exports.schemaName = schemaName;
//# sourceMappingURL=schemaName.js.map