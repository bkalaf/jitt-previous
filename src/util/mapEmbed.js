"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapEmbed = void 0;
const is_1 = require("../common/is");
function mapEmbed(columns, accessorKey, ...dependencies) {
    return columns.map((def) => {
        var _a, _b;
        return (Object.assign(Object.assign({}, def), { accessorKey: [accessorKey, def.accessorKey].join('.'), meta: Object.assign(Object.assign({}, ((_a = def.meta) !== null && _a !== void 0 ? _a : {})), { dependencies: dependencies.map((d) => { var _a; return (Object.assign(Object.assign({}, d), { property: ((_a = d.isLocal) !== null && _a !== void 0 ? _a : false) ? [accessorKey, d.property].join('.') : d.property })); }), columnName: [accessorKey, (_b = def.meta) === null || _b === void 0 ? void 0 : _b.columnName].filter(is_1.is.not.nil).join('.') }) }));
    });
}
exports.mapEmbed = mapEmbed;
//# sourceMappingURL=mapEmbed.js.map