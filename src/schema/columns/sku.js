"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sku = void 0;
const material_react_table_1 = require("material-react-table");
const groupCol_1 = require("../defs/groupCol");
const shipping_1 = require("./shipping");
const col_1 = require("../defs/col");
const _depend_1 = require("./$depend");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
exports.sku = [
    helper.PK(),
    helper.lookup()('product', 'Product', { objectType: 'product' }),
    helper.lookup()('auction', 'Auction', { objectType: 'auction' }),
    helper.enum()('condition', 'Condition', { enumKey: 'itemConditions' }),
    helper.listOfPrimitive(_depend_1.$depend.in('condition', true)('fair', 'poor', 'good', 'parts'))('defects', 'Defects', 'string'),
    helper.enum()('disposition', 'Disposition', { enumKey: 'itemDispositions' }),
    helper.int()('quantity', 'Quantity', { min: 1, required: true }),
    helper.percent()('packingPercent', 'Packing Percent', { min: 1.0, required: true }),
    helper.listOfObject()('skus', 'SKUS', 'barcode'),
    (0, groupCol_1.groupCol)(h, 'Shipping', shipping_1.shippingColumns, 'shipping', 'bg-violet-500', 'text-black')(_depend_1.$depend.notZeroOrNull('packingPercent', true)),
    helper.listOfObject()('hashTags', 'Hash Tags', 'hashTag'),
    helper.listOfObject()('allHashTags', 'ALL Hash Tags', 'hashTag', true)
];
//# sourceMappingURL=sku.js.map