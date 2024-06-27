import { $ } from '../$';
import { IMeasure, MemorySpeedUnitsOfMeasure } from '../../types';
import { schemaName } from '../../util/schemaName';
import { IntMeasure } from './IntMeasure';

export class MemorySpeedMeasure extends IntMeasure<MemorySpeedUnitsOfMeasure> {
    static schema: Realm.ObjectSchema = {
        name: schemaName($.memorySpeedMeasure()),
        embedded: true,
        properties: {
            uom: $.string.default('MHz'),
            value: $.int.default(0)
        }
    };
    static init(): InitValue<IMeasure<MemorySpeedUnitsOfMeasure>> {
        return {
            value: 0,
            uom: 'MHz'
        };
    }
}

