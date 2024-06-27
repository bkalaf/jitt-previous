"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useColumns = exports.useDirectColumns = void 0;
const react_1 = require("react");
const useEffectiveCollection_1 = require("./useEffectiveCollection");
// export const columns = {
//     selfStorage: selfStorageColumns,
//     address: addressColumns,
//     facility: facilityColumns,
//     hashTagUsage: hashTagUsageColumns,
//     hashTag: hashTagColumns,
//     auction: auctionColumns,
//     mercariBrand: mercariBrandColumns,
//     brand: brandColumns,
//     squareFootage: squareFootageColumns,
//     mercariCategory: mercariCategoryColumns,
//     mercariTaxonomy: mercariTaxonomyColumns,
//     attribute: attributeColumns,
//     classifier: classifierColumns
// };
function useDirectColumns(objectType) {
    const result = window.columns[objectType];
    if (result == null)
        throw new Error(`no columns found for: ${objectType}`);
    return (0, react_1.useMemo)(() => result, [result]);
}
exports.useDirectColumns = useDirectColumns;
function useColumns(objectType) {
    const collection = (0, useEffectiveCollection_1.useEffectiveCollection)(objectType);
    // return useMemo(() => columns[collection as keyof typeof columns] as MRT_ColumnDef<T>[], [collection]);
    const result = window.columns[collection];
    if (result == null)
        throw new Error(`no columns found for: ${objectType}`);
    return (0, react_1.useMemo)(() => result, [result]);
}
exports.useColumns = useColumns;
//# sourceMappingURL=useColumns.js.map