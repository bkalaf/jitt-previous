import Realm from 'realm';
import { IHashTag, IMercariCategory } from '../../types';
import { EntityBase } from './EntityBase';
export declare class MercariCategory extends EntityBase<IMercariCategory> implements IMercariCategory {
    name: string;
    selector: string;
    hashTags: DBList<IHashTag>;
    static schema: Realm.ObjectSchema;
    static update(item: IMercariCategory): IMercariCategory;
    static labelProperty: string;
    static init(): InitValue<IMercariCategory>;
}
