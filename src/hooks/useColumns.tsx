import { useMemo } from 'react';
import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { useEffectiveCollection } from './useEffectiveCollection';

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
    const result = window.columns[objectType as keyof typeof window.columns] as MRT_ColumnDef<T>[];
    if (result == null) throw new Error(`no columns found for: ${objectType}`);
    return useMemo(() => result, [result]);
}

export function useColumns<T extends MRT_RowData>(objectType?: string) {
    const collection = useEffectiveCollection(objectType);
    // return useMemo(() => columns[collection as keyof typeof columns] as MRT_ColumnDef<T>[], [collection]);
    const result = window.columns[collection as keyof typeof window.columns] as MRT_ColumnDef<T>[];
    if (result == null) throw new Error(`no columns found for: ${objectType}`);
    return useMemo(() => result, [result]);
}
