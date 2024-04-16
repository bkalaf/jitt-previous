import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IHashTagUsage } from '../types';
import { $ } from './$';
import { schemaName } from '../util/schemaName';
import { col } from './defs/col';

export const hashTagUsage = {
    name: schemaName($.hashTagUsage()),
    embedded: true,
    properties: {
        from: $.date(),
        count: $.int.default(0)
    }
}

const h = createMRTColumnHelper<IHashTagUsage>();
const helper = col(h);

export const hashTagUsageColumns = [
    helper.date('from', 'From', (x?: Date) => x?.toDateString(), { required: true, disableFuture: true }),
    helper.int('count', 'Count', { min: 0, required: true })
] as MRT_ColumnDef<IHashTagUsage>[];