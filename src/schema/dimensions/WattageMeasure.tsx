import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { IMeasure, WattageUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { doubleMeasureColumns } from '../entity/details/measureColumns';
import { DoubleMeasure } from './DoubleMeasure';

export class WattageMeasure extends DoubleMeasure<WattageUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.wattageMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('W'),
            value: $.double.default(0)
        }
    };
    static init(): InitValue<IMeasure<WattageUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 'W'
        };
    }
    static columns: MRT_ColumnDef<WattageMeasure>[] = doubleMeasureColumns<WattageMeasure>(createMRTColumnHelper<WattageMeasure>(), 'amperageUnits')() as MRT_ColumnDef<WattageMeasure>[];
}
