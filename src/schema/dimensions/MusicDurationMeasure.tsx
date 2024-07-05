import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { IMeasure, MusicDurationUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { intMeasureColumns } from '../entity/details/measureColumns';
import { IntMeasure } from './IntMeasure';

export class MusicDurationMeasure extends IntMeasure<MusicDurationUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.musicDurationMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('s'),
            value: $.int.default(0)
        }
    };
    static init(): InitValue<IMeasure<MusicDurationUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 's'
        };
    }
    static columns: MRT_ColumnDef<MusicDurationMeasure>[] = intMeasureColumns<MusicDurationMeasure>(createMRTColumnHelper<MusicDurationMeasure>(), 'amperageUnits')() as MRT_ColumnDef<MusicDurationMeasure>[];
}

