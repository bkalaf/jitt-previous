import { IMeasure, VoltageUnitsOfMeasure } from '../../types';
import { IntMeasure } from './IntMeasure';
export declare class VoltageMeasure extends IntMeasure<VoltageUnitsOfMeasure> {
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IMeasure<VoltageUnitsOfMeasure>>;
}
