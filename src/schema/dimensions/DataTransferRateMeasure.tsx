import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { DataTransferRateUnitsOfMeasure, IMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { DoubleMeasure } from './DoubleMeasure';
import { doubleMeasureColumns } from '../entity/details/measureColumns';

export class DataTransferRateMeasure extends DoubleMeasure<DataTransferRateUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.dataTransferRateMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('MB/s'),
            value: $.double.default(0.0)
        }
    };
    static init(): InitValue<IMeasure<DataTransferRateUnitsOfMeasure>> {
        return {
            value: 0.0,
            uom: 'MB/s'
        };
    }
    static columns: MRT_ColumnDef<DataTransferRateMeasure>[] = doubleMeasureColumns<DataTransferRateMeasure>(createMRTColumnHelper<DataTransferRateMeasure>(), 'amperageUnits')() as MRT_ColumnDef<DataTransferRateMeasure>[];
}