import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { IMeasure, VoltageUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { doubleMeasureColumns } from '../entity/details/measureColumns';
import { DoubleMeasure } from './DoubleMeasure';

export class VoltageMeasure extends DoubleMeasure<VoltageUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.voltageMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('V'),
            value: $.double.default(0)
        }
    };
    static init(): InitValue<IMeasure<VoltageUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 'V'
        };
    }
    static columns: MRT_ColumnDef<VoltageMeasure>[] = doubleMeasureColumns<VoltageMeasure>(createMRTColumnHelper<VoltageMeasure>(), 'amperageUnits')() as MRT_ColumnDef<VoltageMeasure>[];
}
