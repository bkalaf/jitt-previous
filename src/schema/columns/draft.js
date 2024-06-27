"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.draftColumns = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const _depend_1 = require("./$depend");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
exports.draftColumns = [
    helper.PK(),
    helper.lookup()('sku', 'SKU', { objectType: 'sku' }),
    helper.string()('title', 'Title', undefined, { maxLength: 80 }),
    helper.text()('description', 'Description', undefined, { maxLength: 1000 }),
    helper.dollar()('price', 'Price', { min: 0 }),
    helper.bool()('isLocalDelivery', 'Local Delivery'),
    helper.enum()('payor', 'Payor', { enumKey: 'payorTypes', required: true }),
    helper.bool()('smartPricing', 'Smart Price On/Off'),
    helper.dollar(_depend_1.$depend.isTrue('smartPricing'))('smartPrice', 'Smart Price', { min: 0 })
];
//# sourceMappingURL=draft.js.map