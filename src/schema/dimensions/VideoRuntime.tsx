import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { IMeasure, VideoRuntimeUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { intMeasureColumns } from '../entity/details/measureColumns';
import { IntMeasure } from './IntMeasure';

export class VideoRuntimeMeasure extends IntMeasure<VideoRuntimeUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.videoRuntimeMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('m'),
            value: $.int.default(0)
        }
    };
    static init(): InitValue<IMeasure<VideoRuntimeUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 'm'
        };
    }
    static columns: MRT_ColumnDef<VideoRuntimeMeasure>[] = intMeasureColumns<VideoRuntimeMeasure>(createMRTColumnHelper<VideoRuntimeMeasure>(), 'amperageUnits')() as MRT_ColumnDef<VideoRuntimeMeasure>[];
}

