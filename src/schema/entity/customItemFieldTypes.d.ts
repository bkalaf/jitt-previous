import { ICustomItemFieldType, ICustomItemFieldTypes } from '../../types';
import Realm from 'realm';
import { EntityBase } from './EntityBase';
export declare class CustomItemFieldTypes extends EntityBase<ICustomItemFieldTypes> implements ICustomItemFieldTypes {
    types: DBList<ICustomItemFieldType>;
    static schema: Realm.ObjectSchema;
    static liComponent: ListItemCellComponent<ICustomItemFieldTypes>;
    static update(item: ICustomItemFieldTypes): ICustomItemFieldTypes;
    static init(): InitValue<ICustomItemFieldTypes>;
}
