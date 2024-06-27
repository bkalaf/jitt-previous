import { CapacityUnitsOfMeasure, IMeasure } from '../../types';
import { IntMeasure } from './IntMeasure';
export declare class CapacityMeasure extends IntMeasure<CapacityUnitsOfMeasure> {
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IMeasure<CapacityUnitsOfMeasure>>;
}
