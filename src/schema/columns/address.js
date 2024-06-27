"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressColumns = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const _depend_1 = require("./$depend");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
const addressColumns = (...dependencies) => [
    helper.string(_depend_1.$depend.notNilOrEmpty('city', true), ...dependencies)('mailing1', 'Street', undefined, { maxLength: 100 }),
    helper.string(_depend_1.$depend.notNilOrEmpty('city', true), ...dependencies)('mailing2', 'Street (cont.)', undefined, { maxLength: 100 }),
    helper.string(_depend_1.$depend.notNilOrEmpty('city', true), ...dependencies)('suite', 'Suite', undefined, { maxLength: 25 }),
    helper.string(...dependencies)('city', 'City', undefined, { maxLength: 50, required: true }),
    helper.enum(...dependencies)('province', 'Province', { enumKey: 'provinces', required: true }),
    helper.enum(...dependencies)('country', 'Country', { enumKey: 'countries', required: true }),
    helper.string(_depend_1.$depend.notNilOrEmpty('city', true), ...dependencies)('postalCode', 'Postal Code', undefined, { maxLength: 10, pattern: /^[0-9]{5}(-?[0-9]{4})?$|^[A-Z][0-9][A-Z]-?[0-9][A-Z][0-9]$/ })
];
exports.addressColumns = addressColumns;
// export const reg = /^[0-9]{5}$|^[A-Z][0-9][A-Z]-?[0-9][A-Z][0-9]$/
// console.log(reg.test('A1A-1A1'))
// console.log(reg.test('91207'))
//# sourceMappingURL=address.js.map