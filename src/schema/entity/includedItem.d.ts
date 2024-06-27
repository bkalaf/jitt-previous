import { IIncludedItem } from '../../types';
import { EntityBase } from './EntityBase';
import Realm from 'realm';
export declare class IncludedItem extends EntityBase<IIncludedItem> implements IIncludedItem {
    qty: number;
    name: string;
    static schema: Realm.ObjectSchema;
    static liComponent: (value?: IIncludedItem) => () => string;
    static update(item: IIncludedItem): IIncludedItem;
    static init(): InitValue<IIncludedItem>;
}
