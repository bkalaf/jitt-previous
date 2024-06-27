import { $ } from '../$';
import { IMeasure, RotationalSpeedUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
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
}
