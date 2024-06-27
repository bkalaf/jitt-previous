import Realm from 'realm';
import { EntityBase } from './EntityBase';
import { ITrack, Opt } from '../../types';
import { MusicDurationDimension } from '../dimensions/MusicDurationMeasure';
export declare class Track extends EntityBase<ITrack> implements ITrack {
    duration: Opt<MusicDurationDimension>;
    feat: DBList<string>;
    index: Opt<number>;
    name: Opt<string>;
    runtimeSecs: Opt<number>;
    static schema: Realm.ObjectSchema;
    static update(item: ITrack): ITrack;
    static liComponent: ListItemCellComponent<ITrack>;
    static init(): InitValue<ITrack>;
}
