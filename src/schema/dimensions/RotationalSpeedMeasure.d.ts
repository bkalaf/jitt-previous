import { IMeasure, RotationalSpeedUnitsOfMeasure } from '../../types';
import { IntMeasure } from './IntMeasure';
export declare class RotationalSpeedMeasure extends IntMeasure<RotationalSpeedUnitsOfMeasure> {
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IMeasure<RotationalSpeedUnitsOfMeasure>>;
}
