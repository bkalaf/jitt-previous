import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { IMeasure, LengthUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { doubleMeasureColumns } from '../entity/details/measureColumns';
import { DoubleMeasure } from './DoubleMeasure';

export class LengthMeasure extends DoubleMeasure<LengthUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.lengthMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('″'),
            value: $.double.default(0.0)
        }
    };
    static init(): InitValue<IMeasure<LengthUnitsOfMeasure>> {
        return {
            value: 0.0,
            uom: '″'
        };
    }
    static columns: MRT_ColumnDef<LengthMeasure>[] = doubleMeasureColumns<LengthMeasure>(createMRTColumnHelper<LengthMeasure>(), 'amperageUnits')() as MRT_ColumnDef<LengthMeasure>[];
}

