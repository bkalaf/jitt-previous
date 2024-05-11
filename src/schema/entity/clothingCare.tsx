import Realm from "realm";
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IClothingCare } from '../../types';
import { col } from '../defs/col';
import { ClothingCareMap } from '../laundryCare';

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
    helper.clothingCare('bleaching', 'Bleaching'),
    helper.clothingCare('dryClean', 'Dry Clean'),
    helper.clothingCare('drying', 'Drying'),
    helper.clothingCare('gentleOrDelicate', 'Gentle Or Delicate'),
    helper.clothingCare('ironing', 'Ironing'),
    helper.clothingCare('permanentPress', 'Permanent Press'),
    helper.clothingCare('tumbleDry', 'Tumble Dry'),
    helper.clothingCare('wash', 'Wash'),
    helper.clothingCare('washTemperature', 'Wash Temperature'),

]