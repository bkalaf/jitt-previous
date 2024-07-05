import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { doubleMeasureColumns } from '../entity/details/measureColumns';
import { DoubleMeasure } from './DoubleMeasure';

export class DistanceMeasure extends DoubleMeasure<DistanceUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.distanceMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('ft'),
            value: $.double.default(0.0)
        }
    };
    static init(): InitValue<IMeasure<DistanceUnitsOfMeasure>> {
        return {
            value: 0.0,
            uom: 'ft'
        };
    }
    static columns: MRT_ColumnDef<DistanceMeasure>[] = doubleMeasureColumns<DistanceMeasure>(createMRTColumnHelper<DistanceMeasure>(), 'amperageUnits')() as MRT_ColumnDef<DistanceMeasure>[];
}
