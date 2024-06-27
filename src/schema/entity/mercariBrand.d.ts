import Realm, { BSON } from 'realm';
import { ICustomItemFieldType, IHashTag, IMercariBrand, Opt } from '../../types';
import { EntityBase } from './EntityBase';
export declare class MercariBrand extends EntityBase<IMercariBrand> {
    customItemFields: DBList<ICustomItemFieldType>;
    timestamp: Opt<Date>;
    _id: BSON.ObjectId;
    name: string;
    hashTags: DBList<IHashTag>;
    static schema: Realm.ObjectSchema;
    static labelProperty: string;
    static update(item: IMercariBrand): IMercariBrand;
    static init(): InitValue<IMercariBrand>;
}
