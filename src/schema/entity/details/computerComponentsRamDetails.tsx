import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { groupCol } from '../../defs/groupCol';
import { doubleMeasureColumns } from './measureColumns';
import { helper, h } from './computerComponentsDetails';


export const electronicsComputerComponentsRamDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    helper.enum(...dependencies)('memoryType', 'Memory Type', { enumKey: 'memoryTypes' }),
    helper.enum(...dependencies)('memoryForm', 'Memory Form', { enumKey: 'memoryFormFactors' }),
    helper.listOfEnum(...dependencies)('compatibleDevices', 'Compatible Devices', { enumKey: 'compatibleDevices' }),
    groupCol(h, 'Memory Speed', doubleMeasureColumns(h, 'memorySpeedUnitOfMeasure'), 'memorySpeed', 'bg-violet-500', 'text-white')(...dependencies),
    helper.int(...dependencies)('pinCount', 'Pin Count', { min: 0 }),
    helper.enum(...dependencies)('CASLatency', 'Column Address Strobe Latency', { enumKey: 'casLatency' }),
    helper.string(...dependencies)('dataTransferBandwidth', 'Data Transfer Bandwidth', undefined)
] as MRT_ColumnDef<T>[];
