import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { IIncludedItem } from '../../types';
import { col } from '../defs/col';

export const includedItem = {
    name: schemaName($.includedItem()),
    embedded: true,
    properties: {
        qty: $.int.default(1),
        name: $.string()
    }
}

export const h = createMRTColumnHelper<IIncludedItem>();
export const helper = col(h);

export const includedItemColumns: MRT_ColumnDef<IIncludedItem>[] = [
    helper.int('qty', 'Quantity', { min: 1, required: true }),
    helper.string('name', 'Name', undefined, { maxLength: 50, required: true })
]