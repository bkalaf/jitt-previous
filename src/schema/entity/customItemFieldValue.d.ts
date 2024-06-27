import Realm from 'realm';
import { ICustomItemField, ICustomItemFieldValue, Opt } from '../../types';
import { EntityBase } from './EntityBase';
export declare class CustomItemFieldValue extends EntityBase<ICustomItemFieldValue> implements ICustomItemFieldValue {
    get getParent(): Realm.Types.LinkingObjects<ICustomItemField, 'options'>;
    static schema: Realm.ObjectSchema;
    text: string;
    id: string;
    nextField: Opt<ICustomItemField>;
    static labelProperty: string;
    static update(item: ICustomItemFieldValue): ICustomItemFieldValue;
    static init(): InitValue<ICustomItemFieldValue>;
}
