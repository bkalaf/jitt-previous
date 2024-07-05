import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IClothingCare } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IClothingCare>();
const helper = col(h);

export const clothingCareColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.clothingCare(...dependencies)('bleaching', 'Bleaching', 'bleaching'),
        helper.clothingCare(...dependencies)('dryClean', 'Dry Clean', 'dryClean'),
        helper.clothingCare(...dependencies)('drying', 'Drying', 'drying'),
        helper.clothingCare(...dependencies)('gentleOrDelicate', 'Gentle Or Delicate', 'gentleOrDelicate'),
        helper.clothingCare(...dependencies)('ironing', 'Ironing', 'ironing'),
        helper.clothingCare(...dependencies)('permanentPress', 'Permanent Press', 'permanentPress'),
        helper.clothingCare(...dependencies)('tumbleDry', 'Tumble Dry', 'tumbleDry'),
        helper.clothingCare(...dependencies)('wash', 'Wash', 'wash'),
        helper.clothingCare(...dependencies)('washTemperature', 'Wash Temperature', 'washTemperature')
    ] as MRT_ColumnDef<T>[];
