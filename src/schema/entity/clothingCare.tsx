import Realm from "realm";
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IClothingCare } from '../../types';
import { col } from '../defs/col';

export const clothingCare: Realm.ObjectSchema = {
    name: schemaName($.clothingCare()),
    embedded: true,
    properties: {
        bleaching: $.string.list,
        dryClean: $.string.list,
        drying: $.string.list,
        gentleOrDelicate: $.string.list,
        ironing: $.string.list,
        permanentPress: $.string.list,
        tumbleDry: $.string.list,
        wash: $.string.list,
        washTemperature: $.string.list
    }
}

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
    helper.clothingCare('washTemperature', 'Wash Temperature', 'washTemperature'),

]