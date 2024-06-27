import { IMeasure, RateOfEnergyCapacityUnitsOfMeasure } from '../../types';
import { IntMeasure } from './IntMeasure';
export declare class RateOfEnergyCapacityMeasure extends IntMeasure<RateOfEnergyCapacityUnitsOfMeasure> {
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IMeasure<RateOfEnergyCapacityUnitsOfMeasure>>;
}
