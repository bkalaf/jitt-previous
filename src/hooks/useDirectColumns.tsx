import { useMemo } from 'react';
import { MRT_RowData } from 'material-react-table';

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

export function useDirectColumns<T extends MRT_RowData>(objectType: string) {
    const result = window.columns[objectType as keyof typeof window.columns];
    if (result == null) throw new Error(`no columns found for: ${objectType}`);
    return useMemo(() => result<T>, [result]);
}
