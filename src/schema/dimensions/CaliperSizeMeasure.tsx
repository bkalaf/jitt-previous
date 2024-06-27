import { $ } from '../$';
import { CaliperSizeUnitsOfMeasure, IMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { DoubleMeasure } from './DoubleMeasure';

export class CaliperSizeMeasure extends DoubleMeasure<CaliperSizeUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.caliperSizeMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('″'),
            value: $.double.default(0.0)
        }
    };
    static init(): InitValue<IMeasure<CaliperSizeUnitsOfMeasure>> {
        return {
            value: 0.0,
            uom: '″'
        };
    }
}
