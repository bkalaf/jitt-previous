import { ICustomItemFieldType, ICustomItemFieldValue, IMercariBrand, Opt } from '../../types';
import Realm from 'realm';
import { EntityBase } from './EntityBase';
export declare class CustomItemFieldType extends EntityBase<ICustomItemFieldType> implements ICustomItemFieldType {
    get getMercariBrand(): Realm.Types.LinkingObjects<IMercariBrand, 'customItemFields'>;
    type: Opt<string>;
    values: DBList<ICustomItemFieldValue>;
    static schema: Realm.ObjectSchema;
    static labelProperty: string;
    static update(item: ICustomItemFieldType): ICustomItemFieldType;
    static init(): InitValue<ICustomItemFieldType>;
}
