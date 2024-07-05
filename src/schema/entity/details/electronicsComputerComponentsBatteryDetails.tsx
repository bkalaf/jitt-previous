import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { groupCol } from '../../defs/groupCol';
import { currentSettingColumns } from '../../columns/currentSetting';
import { doubleMeasureColumns, intMeasureColumns } from './measureColumns';
import { helper, h } from './computerComponentsDetails';

export const electronicsComputerComponentsBatteryDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.int(...dependencies)('batteryCount', 'Battery Count', { min: 0 }),
        helper.enum(...dependencies)('batteryType', 'Battery Type', { enumKey: 'batteryTypes' }),
        groupCol(h, 'Battery Capacity', doubleMeasureColumns(h, 'powerConsumptionUnitOfMeasure'), 'batteryCapacity', 'bg-pink-500', 'text-white')(...dependencies),
        groupCol(h, 'Battery Stats', currentSettingColumns, 'batteryStats', 'bg-red-500', 'text-white')(...dependencies),
        groupCol(h, 'Rate of Energy Capacity', intMeasureColumns(h, 'rateOfEnergyCapacityUnitOfMeasure'), 'rateOfEnergyCapacity', 'bg-lime-500', 'text-black')(...dependencies),
        helper.listOfEmbed(...dependencies)('compatibleWith', 'Compatible With', 'partNumber')
    ] as MRT_ColumnDef<T>[];
