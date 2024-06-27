"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productImage = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const groupCol_1 = require("../defs/groupCol");
const facing_1 = require("./facing");
const _depend_1 = require("./$depend");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
exports.productImage = [
    helper.PK(),
    helper.string()('filename', 'File Name', undefined, { type: 'text', required: true }),
    helper.string(_depend_1.$depend.notNilOrEmpty('filename', true))('extension', 'Extension', undefined, { required: true }),
    helper.string(_depend_1.$depend.notNilOrEmpty('filename', true))('mimeType', 'MIME Type', undefined, {}),
    helper.lookup()('sku', 'SKU', { objectType: 'sku' }),
    helper.date()('takenOn', 'Taken On', { dateType: 'past' }),
    helper.string()('caption', 'Caption', undefined, {}),
    helper.enum()('selected', 'Selected', { enumKey: 'productImageType' }),
    // helper.string()('selected', 'Selected', undefined, {}),
    (0, groupCol_1.groupCol)(h, 'Facing', facing_1.facing, 'facing', 'bg-red-500', 'text-white')(),
    helper.flags()('flags', 'Flags', ['do-not-rembg', 'ignore']),
    helper.radio()('disposition', 'Disposition', { enumKey: 'productImageDisposition' })
];
//# sourceMappingURL=productImage.js.map