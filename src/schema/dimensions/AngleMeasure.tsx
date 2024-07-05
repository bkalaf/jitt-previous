import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { doubleMeasureColumns } from '../entity/details/measureColumns';
import { DoubleMeasure } from './DoubleMeasure';
import UNICODE from './unicode';

export class AngleMeasure extends DoubleMeasure<AngleUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.angleMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('°'),
            value: $.double.default(0)
        }
    };
    static init(): InitValue<IMeasure<string>> {
        return {
            value: 0,
            uom: UNICODE.DEGREE as AngleUnitsOfMeasure
        };
    }
    static columns: MRT_ColumnDef<AngleMeasure>[] = doubleMeasureColumns<AngleMeasure>(createMRTColumnHelper<AngleMeasure>(), 'amperageUnits')() as MRT_ColumnDef<AngleMeasure>[];
}
