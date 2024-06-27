import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const computerComponentsDetails: MRT_ColumnDef<IProduct>[] = [] as MRT_ColumnDef<IProduct>[];
export const computerComponentsDrivesDetails: MRT_ColumnDef<IProduct>[] = [
    helper.enum('driveType', 'Drive Type', { enumKey: 'driveTypes' }),
    helper.enum('driveForm', 'Drive Form', { enumKey: 'driveFormFactors' }),
    helper.listofEnum('connectivity', 'Connectivity', { enumKey: 'connectivity' }),
    helper.enum('driveInterface', 'Drive Interface', { enumKey: 'driveInterfaces' }),
    helper.double('driveSize.value' as any, 'Drive Size', { min: 0 }),
    helper.enum('driveSize.uom' as any, 'Drive Size UOM', { enumKey: 'capacityUOM' }),
    helper.measure('writeSpeed', 'Write Speed', 'MB/s', { min: 0 }),
    helper.measure('readSpeed', 'Read Speed', 'MB/s', { min: 0 }),
    helper.measure('dataTransferRate', 'Data Transfer Rate', 'MBit/s', { min: 0 }),
    helper.intMeasure('rpm', 'Rotational Speed', 'RPM', { min: 0 }),
    helper.measure('cacheSize', 'Cache Size', 'MB', { min: 0 })
] as MRT_ColumnDef<IProduct>[];

export const computerComponentsRamDetails: MRT_ColumnDef<IProduct>[] = [
    helper.enum('memoryType', 'Memory Type', { enumKey: 'memoryTypes' }),
    helper.enum('memoryForm', 'Memory Form', { enumKey: 'memoryFormFactors' }),
    helper.enum('compatibleDevices', 'Compatible Devices', { enumKey: 'compatibleDevices' }),
    helper.measure('memorySpeed', 'Memory Speed', 'MHz', { min: 0 }),
    helper.double('memorySize.value' as any, 'Drive Size', { min: 0 }),
    helper.enum('memorySize.uom' as any, 'Drive Size UOM', { enumKey: 'capacityUOM' }),
    helper.int('pinCount', 'Pin Count', { min: 0 }),
    helper.measure('voltage', 'Voltage', 'V', { min: 0 }),
    helper.enum('CASLatency', 'Column Address Strobe Latency', { enumKey: 'casLatency' }),
    helper.string('dataTransferBandwidth', 'Data Transfer Bandwidth', undefined)
] as MRT_ColumnDef<IProduct>[];
