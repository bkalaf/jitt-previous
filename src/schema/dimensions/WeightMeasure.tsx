import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { doubleMeasureColumns } from '../entity/details/measureColumns';
import { DoubleMeasure } from './DoubleMeasure';

export class WeightMeasure extends DoubleMeasure<WeightUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.weightMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('g'),
            value: $.double.default(0.0)
        }
    };
    static init(): InitValue<IMeasure<WeightUnitsOfMeasure>> {
        return {
            value: 0.0,
            uom: 'g'
        };
    }
    static columns: MRT_ColumnDef<WeightMeasure>[] = doubleMeasureColumns<WeightMeasure>(createMRTColumnHelper<WeightMeasure>(), 'amperageUnits')() as MRT_ColumnDef<WeightMeasure>[];
}

