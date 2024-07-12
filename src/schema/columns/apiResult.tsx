import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { col } from '../defs/col';
import { IApiResult } from '../../types';


export const h = createMRTColumnHelper<IApiResult>();
export const helper = col(h);

export const apiResultColumns: (...dependencies: IDependency<any, any>[]) => MRT_ColumnDef<any>[] = (...dependencies: IDependency<any, any>[]) => [
    helper.PK(),
    helper.string(...dependencies)('source', 'Source', undefined, { required: true }),
    helper.string(...dependencies)('params', 'Params', undefined, {}),
    helper.date(...dependencies)('timestamp', 'Timestamp', { dateType: 'past' }),
    helper.string(...dependencies)('result', 'Result', undefined, {}),
    helper.bool(...dependencies)('obsolete', 'Is Obsolete')
] as MRT_ColumnDef<any>[];