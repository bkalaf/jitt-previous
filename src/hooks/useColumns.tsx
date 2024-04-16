import { useMemo } from 'react';
import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { useCollectionRoute } from './useCollectionRoute';
import { addressColumns } from '../schema/address';
import { facilityColumns } from '../schema/facility';
import { selfStorageColumns } from '../schema/selfStorage';
import { hashTagUsageColumns } from '../schema/hashTagUsage';
import { hashTagColumns } from '../schema/hashTag';
import { auctionColumns } from '../schema/auction';
import { mercariBrandColumns } from '../schema/mercariBrand';
import { brandColumns } from '../schema/brand';
import { squareFootageColumns } from '../schema/squareFootage';
import { mercariCategoryColumns } from '../schema/mercariCategory';
import { mercariTaxonomyColumns } from '../schema/mercariTaxonomy';

export const columns = {
    selfStorage: selfStorageColumns,
    address: addressColumns,
    facility: facilityColumns,
    hashTagUsage: hashTagUsageColumns,
    hashTag: hashTagColumns,
    auction: auctionColumns,
    mercariBrand: mercariBrandColumns,
    brand: brandColumns,
    squareFootage: squareFootageColumns,
    mercariCategory: mercariCategoryColumns,
    mercariTaxonomy: mercariTaxonomyColumns
};

export function useColumns<T extends MRT_RowData>() {
    const collection = useCollectionRoute();
    return useMemo(() => columns[collection as keyof typeof columns] as MRT_ColumnDef<T>[], [collection]);
}
