import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IClothingCare } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IClothingCare>();
const helper = col(h);

export const clothingCareColumns: MRT_ColumnDef<IClothingCare>[] = [
    helper.clothingCare('bleaching', 'Bleaching', 'bleaching'),
    helper.clothingCare('dryClean', 'Dry Clean', 'dryClean'),
    helper.clothingCare('drying', 'Drying', 'drying'),
    helper.clothingCare('gentleOrDelicate', 'Gentle Or Delicate', 'gentleOrDelicate'),
    helper.clothingCare('ironing', 'Ironing', 'ironing'),
    helper.clothingCare('permanentPress', 'Permanent Press', 'permanentPress'),
    helper.clothingCare('tumbleDry', 'Tumble Dry', 'tumbleDry'),
    helper.clothingCare('wash', 'Wash', 'wash'),
    helper.clothingCare('washTemperature', 'Wash Temperature', 'washTemperature')
] as MRT_ColumnDef<IClothingCare>[];
