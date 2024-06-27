import { IMeasure, MemorySpeedUnitsOfMeasure } from '../../types';
import { IntMeasure } from './IntMeasure';
export declare class MemorySpeedMeasure extends IntMeasure<MemorySpeedUnitsOfMeasure> {
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IMeasure<MemorySpeedUnitsOfMeasure>>;
}
