import { IMeasure, MusicDurationUnitsOfMeasure } from '../../types';
import { IntMeasure } from './IntMeasure';
export declare class MusicDurationMeasure extends IntMeasure<MusicDurationUnitsOfMeasure> {
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IMeasure<MusicDurationUnitsOfMeasure>>;
}
