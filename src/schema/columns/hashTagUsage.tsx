import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IHashTagUsage } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IHashTagUsage>();
const helper = col(h);

export const hashTagUsageColumns = [helper.date()('from', 'From', { dateType: 'past' }, true), helper.int()('count', 'Count', { min: 0, required: true })] as MRT_ColumnDef<IHashTagUsage>[];
