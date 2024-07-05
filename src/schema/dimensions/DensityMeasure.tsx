import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { DensityUnitsOfMeasure, IMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { doubleMeasureColumns } from '../entity/details/measureColumns';
import { DoubleMeasure } from './DoubleMeasure';

export class DensityMeasure extends DoubleMeasure<DensityUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.densityMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('g/cm³'),
            value: $.double.default(0.0)
        }
    };
    static init(): InitValue<IMeasure<DensityUnitsOfMeasure>> {
        return {
            value: 0.0,
            uom: 'g/cm³'
        };
    }
    static columns: MRT_ColumnDef<DensityMeasure>[] = doubleMeasureColumns<DensityMeasure>(createMRTColumnHelper<DensityMeasure>(), 'amperageUnits')() as MRT_ColumnDef<DensityMeasure>[];
}
