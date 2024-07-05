import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { groupCol } from '../../defs/groupCol';
import { currentSettingColumns } from '../../columns/currentSetting';
import { h, helper } from './cablesDetails';

export const cablesPowerDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        groupCol(h, 'Input', currentSettingColumns, 'input', 'bg-red-500', 'text-white')(...dependencies),
        groupCol(h, 'Output', currentSettingColumns, 'output', 'bg-red-500', 'text-white')(...dependencies),
        helper.listOfEmbed(...dependencies)('compatibleWith', 'Compatible With', 'partNumber')
    ] as MRT_ColumnDef<T>[];
