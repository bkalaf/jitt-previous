import { IHashTag, IHashTagUsage } from '../../types';
import Realm, { BSON } from 'realm';
import { EntityBase } from './EntityBase';
export declare class HashTag extends EntityBase<IHashTag> {
    _id: BSON.ObjectId;
    name: string;
    usage: DBList<IHashTagUsage>;
    get maxCount(): number;
    get mostRecent(): Date;
    static schema: Realm.ObjectSchema;
    static labelProperty: string;
    static update(item: IHashTag): IHashTag;
    static init(): InitValue<IHashTag>;
}
