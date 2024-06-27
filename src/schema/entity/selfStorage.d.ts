import { ISelfStorage } from '../../types';
import Realm, { BSON } from 'realm';
import { EntityBase } from './EntityBase';
export declare class SelfStorage extends EntityBase<ISelfStorage> {
    _id: BSON.ObjectId;
    name: string;
    website?: string | undefined;
    static schema: Realm.ObjectSchema;
    static labelProperty: string;
    static init(): InitValue<ISelfStorage>;
    static update(item: ISelfStorage): ISelfStorage;
}
