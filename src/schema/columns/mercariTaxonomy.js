"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mercariTaxonomyColumns = exports.helper = exports.h = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const groupCol_1 = require("../defs/groupCol");
const mercariCategory_1 = require("./mercariCategory");
const _depend_1 = require("./$depend");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
exports.helper = (0, col_1.col)(exports.h);
exports.mercariTaxonomyColumns = [
    exports.helper.PK(),
    exports.helper.string()('fullname', 'Full Name', undefined, { maxLength: 250, readonly: true }),
    exports.helper.date()('timestamp', 'Timestamp', { dateType: 'past' }),
    exports.helper.listOfObject()('hashTags', 'Hash Tags', 'hashTag'),
    (0, groupCol_1.groupCol)(exports.h, 'Category', mercariCategory_1.mercariCategoryColumns, 'category', 'bg-blue-700', 'text-white')(),
    (0, groupCol_1.groupCol)(exports.h, 'SubCategory', mercariCategory_1.mercariCategoryColumns, 'subCategory', 'bg-red-700', 'text-white')(_depend_1.$depend.notNilOrEmpty('category.name', true)),
    (0, groupCol_1.groupCol)(exports.h, 'SubSubCategory', mercariCategory_1.mercariCategoryColumns, 'subSubCategory', 'bg-orange-700', 'text-white')(_depend_1.$depend.notNilOrEmpty('subCategory.name', true))
];
//# sourceMappingURL=mercariTaxonomy.js.map