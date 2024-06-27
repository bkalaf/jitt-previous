import { $ } from '../$';
import { DataTransferRateUnitsOfMeasure, IMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { DoubleMeasure } from './DoubleMeasure';

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
}