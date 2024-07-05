import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { intMeasureColumns } from '../entity/details/measureColumns';
import { IntMeasure } from './IntMeasure';


export class RateOfEnergyCapacityMeasure extends IntMeasure<RateOfEnergyCapacityUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.rateOfEnergyMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('mAh'),
            value: $.int.default(0)
        }
    };
    static init(): InitValue<IMeasure<RateOfEnergyCapacityUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 'mAh'
        };
    }
    static columns: MRT_ColumnDef<RateOfEnergyCapacityMeasure>[] = intMeasureColumns<RateOfEnergyCapacityMeasure>(createMRTColumnHelper<RateOfEnergyCapacityMeasure>(), 'amperageUnits')() as MRT_ColumnDef<RateOfEnergyCapacityMeasure>[];
}
