import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { IMeasure, PowerConsumptionUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { doubleMeasureColumns } from '../entity/details/measureColumns';
import { DoubleMeasure } from './DoubleMeasure';

export class PowerConsumptionMeasure extends DoubleMeasure<PowerConsumptionUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.powerConsumptionMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('WHr'),
            value: $.double.default(0.0)
        }
    };
    static init(): InitValue<IMeasure<PowerConsumptionUnitsOfMeasure>> {
        return {
            value: 0.0,
            uom: 'WHr'
        };
    }
    static columns: MRT_ColumnDef<PowerConsumptionMeasure>[] = doubleMeasureColumns<PowerConsumptionMeasure>(createMRTColumnHelper<PowerConsumptionMeasure>(), 'amperageUnits')() as MRT_ColumnDef<PowerConsumptionMeasure>[];
}

