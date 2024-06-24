import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IIncludedItem } from '../../types';
import { col } from '../defs/col';

export const h = createMRTColumnHelper<IIncludedItem>();
export const helper = col(h);

export const includedItemColumns: MRT_ColumnDef<IIncludedItem>[] = [helper.int('qty', 'Quantity', { min: 1, required: true }), helper.string('name', 'Name', undefined, { maxLength: 50, required: true })] as MRT_ColumnDef<IIncludedItem>[];
