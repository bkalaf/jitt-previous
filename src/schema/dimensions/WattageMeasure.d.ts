import { IMeasure, WattageUnitsOfMeasure } from '../../types';
import { IntMeasure } from './IntMeasure';
export declare class WattageMeasure extends IntMeasure<WattageUnitsOfMeasure> {
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IMeasure<WattageUnitsOfMeasure>>;
}
