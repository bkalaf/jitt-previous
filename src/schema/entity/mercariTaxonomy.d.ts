import Realm, { BSON } from 'realm';
import { IApparelSize, ICustomItemField, IHashTag, IMercariCategory, IMercariTaxonomy, Opt } from '../../types';
import { EntityBase } from './EntityBase';
export declare class MercariTaxonomy extends EntityBase<IMercariTaxonomy> implements IMercariTaxonomy {
    sizes: DBList<IApparelSize>;
    customItemField: Opt<ICustomItemField>;
    _id: BSON.ObjectId;
    category?: IMercariCategory;
    subCategory?: IMercariCategory;
    subSubCategory?: IMercariCategory;
    hashTags: DBList<IHashTag>;
    fullname: string;
    timestamp?: Date | undefined;
    allHashTags: IHashTag[];
    static labelProperty: string;
    static schema: Realm.ObjectSchema;
    static update(item: IMercariTaxonomy): IMercariTaxonomy;
    static init(): InitValue<IMercariTaxonomy>;
}
