import { createMRTColumnHelper, MRT_RowData, MRT_ColumnDef } from 'material-react-table';
import { IAdminTask } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IAdminTask>();
const helper = col(h);

export const adminTaskColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        helper.enum(...dependencies)('taskType', 'Task Type', { enumKey: 'adminTaskTypes' }),
        helper.date(...dependencies)('timestamp', 'Timestamp', { dateType: 'past' }),
        helper.bool(...dependencies)('wasSuccess', 'Was Success'),
        helper.dictionary(...dependencies)('result', 'Result', 'string')
    ] as MRT_ColumnDef<T>[];