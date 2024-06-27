"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facilityColumns = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const groupCol_1 = require("../defs/groupCol");
const address_1 = require("./address");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
exports.facilityColumns = [
    helper.PK(),
    helper.lookup()('selfStorage', 'Self-Storage', { objectType: 'selfStorage' }),
    helper.string()('facilityNumber', 'Facility #', undefined, { maxLength: 30 }),
    helper.string()('phoneNumber', 'Phone #', (x) => (x != null && typeof x === 'string' ? ['(', x.slice(0, 3), ') ', x.slice(3, 6), '-', x.slice(6)].join('') : ''), { maxLength: 15 }),
    helper.string()('emailAddress', 'E-mail', undefined, { maxLength: 200, type: 'email' }),
    helper.string()('name', 'Name', undefined, { readonly: true }),
    (0, groupCol_1.groupCol)(h, 'Address', (0, address_1.addressColumns)(), 'address', 'bg-blue-700', 'text-white')
];
//# sourceMappingURL=facility.js.map