import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { doubleMeasureColumns } from '../entity/details/measureColumns';
import { DoubleMeasure } from './DoubleMeasure';

export class CaliperSizeMeasure extends DoubleMeasure<CaliperSizeUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.caliperSizeMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('″'),
            value: $.double.default(0.0)
        }
    };
    static init(): InitValue<IMeasure<CaliperSizeUnitsOfMeasure>> {
        return {
            value: 0.0,
            uom: '″'
        };
    }
    static columns: MRT_ColumnDef<CaliperSizeMeasure>[] = doubleMeasureColumns<CaliperSizeMeasure>(createMRTColumnHelper<CaliperSizeMeasure>(), 'amperageUnits')() as MRT_ColumnDef<CaliperSizeMeasure>[];
}


