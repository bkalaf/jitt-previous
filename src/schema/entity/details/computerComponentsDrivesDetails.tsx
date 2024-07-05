import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { groupCol } from '../../defs/groupCol';
import { doubleMeasureColumns, intMeasureColumns } from './measureColumns';
import { helper, h } from './computerComponentsDetails';

export const electronicsComputerComponentsDrivesDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    helper.enum(...dependencies)('driveType', 'Drive Type', { enumKey: 'driveTypes' }),
    helper.enum(...dependencies)('driveForm', 'Drive Form', { enumKey: 'driveFormFactors' }),
    helper.listOfEnum(...dependencies)('connectivity', 'Connectivity', { enumKey: 'connectivity' }),
    helper.enum(...dependencies)('driveInterface', 'Drive Interface', { enumKey: 'driveInterfaces' }),
    groupCol(h, 'Read Speed', doubleMeasureColumns(h, 'dataTransferRateUnitOfMeasure'), 'readSpeed', 'bg-rose-500', 'text-white')(...dependencies),
    groupCol(h, 'Write Speed', doubleMeasureColumns(h, 'dataTransferRateUnitOfMeasure'), 'writeSpeed', 'bg-orange-500', 'text-white')(...dependencies),
    groupCol(h, 'Data Transfer Rate', doubleMeasureColumns(h, 'dataTransferRateUnitOfMeasure'), 'dataTransferRate', 'bg-yellow-500', 'text-black')(...dependencies),
    groupCol(h, 'Rotational Speed', intMeasureColumns(h, 'rotationalSpeedUnitOfMeasure'), 'rpm', 'bg-green-500', 'text-white')(...dependencies),
    groupCol(h, 'Cache Size', intMeasureColumns(h, 'capacityUnitOfMeasure'), 'cacheSize', 'bg-blue-500', 'text-white')(...dependencies)
] as MRT_ColumnDef<T>[];
