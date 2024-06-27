import { IMeasure, PowerConsumptionUnitsOfMeasure } from '../../types';
import { IntMeasure } from './IntMeasure';
export declare class PowerConsumptionMeasure extends IntMeasure<PowerConsumptionUnitsOfMeasure> {
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IMeasure<PowerConsumptionUnitsOfMeasure>>;
}
