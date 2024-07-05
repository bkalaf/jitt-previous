import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { ICurrentSetting } from '../../types';
import { groupCol } from '../defs/groupCol';
import { doubleMeasureColumns } from '../entity/details/measureColumns';

const h = createMRTColumnHelper<ICurrentSetting>();

export const currentSettingColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        groupCol(h, 'Voltage', doubleMeasureColumns(h, 'voltageUnitOfMeasure'), 'voltage', 'bg-red-500', 'text-white')(...dependencies),
        groupCol(h, 'Wattage', doubleMeasureColumns(h, 'wattageUnitOfMeasure'), 'wattage', 'bg-orange-500', 'text-white')(...dependencies),
        groupCol(h, 'Amperage', doubleMeasureColumns(h, 'amperageUnits'), 'amperage', 'bg-blue-500', 'text-white')(...dependencies)
    ] as MRT_ColumnDef<T>[];
