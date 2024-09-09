import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IMaterialCondition } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IMaterialCondition>();
const helper = col(h);

export const materialConditionColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [helper.enum(...dependencies)('material', 'Material', { enumKey: 'fabricTypes', required: true }), helper.bool(...dependencies)('anyValue', 'Allow Any Value'), helper.double(...dependencies)('value', 'Value', {})] as MRT_ColumnDef<T>[];
