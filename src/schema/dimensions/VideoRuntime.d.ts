import { IMeasure, VideoRuntimeUnitsOfMeasure } from '../../types';
import { IntMeasure } from './IntMeasure';
export declare class VideoRuntimeMeasure extends IntMeasure<VideoRuntimeUnitsOfMeasure> {
    static schema: Realm.ObjectSchema;
    static init(): InitValue<IMeasure<VideoRuntimeUnitsOfMeasure>>;
}
