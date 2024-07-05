import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import {  intMeasureColumns } from '../entity/details/measureColumns';
import { IntMeasure } from './IntMeasure';


export class RotationalSpeedMeasure extends IntMeasure<RotationalSpeedUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.rotationalSpeedMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('RPM'),
            value: $.int.default(0)
        }
    };
    static init(): InitValue<IMeasure<RotationalSpeedUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 'RPM'
        };
    }
    static columns: MRT_ColumnDef<RotationalSpeedMeasure>[] = intMeasureColumns<RotationalSpeedMeasure>(createMRTColumnHelper<RotationalSpeedMeasure>(), 'amperageUnits')() as MRT_ColumnDef<RotationalSpeedMeasure>[];
}
