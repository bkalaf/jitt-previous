import Realm, { BSON } from 'realm';
import { DetailTypes, IAttribute, IClassifier, IHashTag, IMercariTaxonomy } from '../../types';
import { EntityBase } from './EntityBase';
export declare class Classifier extends EntityBase<IClassifier> implements IClassifier {
    _id: BSON.ObjectId;
    taxonomy?: IMercariTaxonomy | undefined;
    shortName: string;
    parent?: Pick<IClassifier, '_id' | 'shortName' | 'name' | 'hashTags' | 'allHashTags' | 'detailTypes' | 'allAttributes'> | undefined;
    name: string;
    type: DBList<DetailTypes>;
    attributes: DBList<IAttribute>;
    hashTags: DBList<IHashTag>;
    static schema: Realm.ObjectSchema;
    static labelProperty: string;
    static update(item: IClassifier): IClassifier;
    static init(): InitValue<IClassifier>;
    get allHashTags(): IHashTag[];
    get detailTypes(): DetailTypes[];
    get allAttributes(): IAttribute[];
    get subRows(): Realm.Results<any>;
}
