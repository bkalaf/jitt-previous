import Realm, { BSON } from 'realm';
import { ICustomItemField, ICustomItemFieldTypes, IMercariTaxonomy, Opt } from '../../types';
import { EntityBase } from './EntityBase';
export declare class CustomItemField extends EntityBase<ICustomItemField> implements ICustomItemField {
    linkedType: Opt<string>;
    brandsMap: DBDictionary<ICustomItemFieldTypes>;
    get getTaxonomy(): Realm.Types.LinkingObjects<IMercariTaxonomy, 'customItemField'>;
    _id: BSON.ObjectId;
    id: string;
    static schema: Realm.ObjectSchema;
    static liComponent: (value?: ICustomItemField) => () => string;
    static update(item: ICustomItemField): ICustomItemField;
    static init(): InitValue<ICustomItemField>;
}
