"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classifierColumns = exports.helper = exports.h = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
exports.helper = (0, col_1.col)(exports.h);
// export function createStringValueCell<T extends MRT_RowData>() {
//     return function StringValueCell(props: Parameters<Exclude<MRT_ColumnDef<T, string | undefined>['Cell'], undefined>>[0]) {
//         useWhyDidIUpdate('StringValueCell', props);
//         const { cell } = props;
//         const value = cell.getValue() ?? '';
//         return value;
//     } as Exclude<MRT_ColumnDef<T>['Cell'], undefined>;
// }
// export const stringColumn = [
//     createMRTColumnHelper<{ value?: string }>().accessor('value', {
//         header: 'Value',
//         Cell: StringTableCell<{ value?: string }, string | undefined>,
//         Edit: StringControl<{ value?: string }, string | undefined>,
//         meta: {
//             maxLength: 150
//         }
//     })
// ] as MRT_ColumnDef<{ value: string }, string | undefined>[];
exports.classifierColumns = [
    exports.helper.PK(),
    exports.helper.lookup()('taxonomy', 'Taxonomy', { objectType: 'mercariTaxonomy' }),
    exports.helper.string()('shortName', 'Short Name', undefined, { maxLength: 50, required: true }),
    exports.helper.lookup()('parent', 'Parent', { objectType: 'classifier' }),
    exports.helper.string()('name', 'Name', undefined, { maxLength: 150, required: false }),
    exports.helper.listOfEnum()('type', 'Detail Types', { enumKey: 'detailsTypes' }),
    exports.helper.listOfPrimitive()('detailTypes', 'ALL Detail Types', 'string', true),
    exports.helper.listOfObject()('hashTags', 'Hash Tags', 'hashTag'),
    exports.helper.listOfObject()('allHashTags', 'ALL Hash Tags', 'hashTag', true),
    exports.helper.listOfEmbed()('attributes', 'Attribute', 'attribute'),
    exports.helper.listOfEmbed()('allAttributes', 'ALL Attribute', 'attribute', true)
];
//# sourceMappingURL=classifier.js.map