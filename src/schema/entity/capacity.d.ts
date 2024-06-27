import { IOldDimension } from '../../types';
import Realm from 'realm';
import { EntityBase } from './EntityBase';
/** @deprecated */
export declare class OldDimension<T extends string> extends EntityBase<IOldDimension<T>> implements IOldDimension<T> {
    uom: T;
    value: number;
    static schema: Realm.ObjectSchema;
    static liComponent: ListItemCellComponent<IOldDimension<string>>;
    static update(item: IOldDimension<string>): IOldDimension<string>;
    static init(): InitValue<IOldDimension<string>>;
}
